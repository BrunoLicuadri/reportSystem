package com.godknows.reports.dtos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;

import com.godknows.reports.entities.User;



public class UserPasswordDTO {
	
	private Long id;
	private String name;
	private String email;
	private String phone;
	private LocalDate birthDate;
	private String password;
	
	private List<String> roles = new ArrayList<>();
	
	
	public UserPasswordDTO(Long id, String name, String email, String phone, LocalDate birthDate, String password) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.birthDate = birthDate;
		this.password = password;
	}
	
	public UserPasswordDTO(User entity) {
		id = entity.getId();
		name = entity.getName();
		email = entity.getEmail();
		phone = entity.getPhone();
		birthDate = entity.getBirthDate();
		password = entity.getPassword();
		
		for(GrantedAuthority role : entity.getAuthorities()) {
			roles.add(role.getAuthority());
		}
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}

	public String getPhone() {
		return phone;
	}

	public LocalDate getBirthDate() {
		return birthDate;
	}

	public List<String> getRoles() {
		return roles;
	}

	public String getPassword() {
		return password;
	}

}
