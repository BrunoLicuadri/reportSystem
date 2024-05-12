package com.godknows.reports.dtos;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.security.core.GrantedAuthority;

import com.godknows.reports.entities.User;

public class UserMinDTO {
	
	private Long id;
	@NotBlank(message="Campo Obrigatório")
    @Size(min=3,max=50, message="Mínimo de 3 e Máximo de 50 caracteres.")
	private String name;
	
	
	@NotEmpty(message="Deve ter pelo menos 1 escopo de autoridade")
	private List<String> roles = new ArrayList<>();
	
	
	public UserMinDTO() {
	}


	public UserMinDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	
	public UserMinDTO(User entity) {
		id = entity.getId();
		name = entity.getName();
		
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

	public List<String> getRoles() {
		return roles;
	}

}
