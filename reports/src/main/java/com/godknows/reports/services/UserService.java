package com.godknows.reports.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.godknows.reports.dtos.UserDTO;
import com.godknows.reports.entities.Role;
import com.godknows.reports.entities.User;
import com.godknows.reports.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	public UserRepository repository;


	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByName(username);
		if (user == null) {
			throw new UsernameNotFoundException ("Nome não encontrado.");
		}
		return user;
	}
	
	
	protected User authenticated() {
		try {
			String username = SecurityContextHolder.getContext().getAuthentication().getName();
			return repository.findByName(username);
		}
		catch(Exception e) {
			throw new UsernameNotFoundException("Invalid user.");
		}
	}
	
	@Transactional(readOnly= true)
	public UserDTO getme() {
		User entity  = authenticated();
		return new UserDTO(entity);
	}
	
	@Transactional
	public UserDTO insertUser (UserDTO dto, Role role) {
		User entity = new User();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		entity.setPassword("123456");
		entity.addRole(role);
		return new UserDTO(entity);
	}
	
	
	private void copyDtoToEntity (UserDTO dto, User entity) {
		entity.setName(dto.getName());
		entity.setBirthDate(dto.getBirthDate());
		entity.setEmail(dto.getEmail());
		entity.setPhone(dto.getPhone());

		for(String authority : dto.g) {
			Role role = new Role();
			role.setId(authority.getAuthority());
			entity.getRoles().add(role);
		}
		
		
	}
}
