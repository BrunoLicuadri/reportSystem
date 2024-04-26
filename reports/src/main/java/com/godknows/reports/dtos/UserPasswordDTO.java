package com.godknows.reports.dtos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.godknows.reports.entities.Role;
import com.godknows.reports.entities.User;



public class UserPasswordDTO {
	
	private Long id;
	@NotBlank(message="Campo Obrigatório")
    @Size(min=3,max=50, message="Mínimo de 3 e Máximo de 50 caracteres.")
	private String name;
	@NotBlank(message="Campo Obrigatório")
	private String email;
	@NotBlank(message="Campo Obrigatório")
	private String phone;
	private LocalDate birthDate;
	@NotBlank(message="Campo Obrigatório")
	private String password;
	
	@NotEmpty(message="Deve ter pelo menos 1 escopo de autoridade")
	private List<RoleDTO> roles = new ArrayList<>();
	
	
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
		
		for(Role role : entity.getRoles()) {
			roles.add(new RoleDTO(role));
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

	public List<RoleDTO> getRoles() {
		return roles;
	}

	public String getPassword() {
		return password;
	}

}
