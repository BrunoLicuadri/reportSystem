package com.godknows.reports.dtos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.security.core.GrantedAuthority;

import com.godknows.reports.entities.User;

public class UserDTO {
	
	private Long id;
	@NotBlank(message="Campo Obrigatório")
    @Size(min=3,max=50, message="Mínimo de 3 e Máximo de 50 caracteres.")
	private String name;
	@NotBlank(message="Campo Obrigatório")
	private String email;
	@NotBlank(message="Campo Obrigatório")
	private String phone;
	private LocalDate birthDate;
	private Integer unit;
	
	@NotEmpty(message="Deve ter pelo menos 1 escopo de autoridade")
	private List<String> roles = new ArrayList<>();
	
	
	public UserDTO() {
	}


	public UserDTO(Long id, String name, String email, String phone, LocalDate birthDate, Integer unit) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.birthDate = birthDate;
		this.unit = unit;
	}
	
	public UserDTO(User entity) {
		id = entity.getId();
		name = entity.getName();
		email = entity.getEmail();
		phone = entity.getPhone();
		birthDate = entity.getBirthDate();
		unit = entity.getUnit();
		
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
	
	
	public Integer getUnit() {
		return unit;
	}


	public List<String> getRoles() {
		return roles;
	}

}
