package com.godknows.reports.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.godknows.reports.entities.User;
import com.godknows.reports.repositories.UserRepository;

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
}
