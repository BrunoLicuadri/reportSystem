package com.godknows.reports.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.godknows.reports.dtos.RoleDTO;
import com.godknows.reports.dtos.UserDTO;
import com.godknows.reports.dtos.UserPasswordDTO;
import com.godknows.reports.entities.Role;
import com.godknows.reports.entities.User;
import com.godknows.reports.repositories.RoleRepository;
import com.godknows.reports.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	public UserRepository repository;
	
	@Autowired
	public RoleRepository roleRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByName(username);
		if (user == null) {
			throw new UsernameNotFoundException("Nome não encontrado.");
		}
		return user;
	}

	protected User authenticated() {
		try {
			String username = SecurityContextHolder.getContext().getAuthentication().getName();
			return repository.findByName(username);
		} catch (Exception e) {
			throw new UsernameNotFoundException("Invalid user.");
		}
	}

	@Transactional(readOnly = true)
	public Page<UserDTO> findAll(Pageable pageable) {
		Page<User> result = repository.searchUsers(pageable);
		return result.map(x -> new UserDTO(x));
	}

	@Transactional(readOnly = true)
	public UserDTO getme() {
		User entity = authenticated();
		return new UserDTO(entity);
	}

	@Transactional
	public UserPasswordDTO insertUser(UserPasswordDTO dto) {
		User entity = new User();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new UserPasswordDTO(entity);
	}

	private void copyDtoToEntity(UserPasswordDTO dto, User entity) {
		entity.setName(dto.getName());
		entity.setBirthDate(dto.getBirthDate());
		entity.setEmail(dto.getEmail());
		entity.setPhone(dto.getPhone());
		entity.setPassword(passwordEncoder.encode(dto.getPassword()));

		for (RoleDTO roleDto : dto.getRoles()) {
			Role role = roleRepository.getReferenceById(roleDto.getId());
			entity.getRoles().add(role);
		}
	}
}
