package com.godknows.reports.dtos;

import com.godknows.reports.entities.Role;

public class RoleDTO {
	
	private Long id;
	private String authority;
	
	
	public RoleDTO(Long id, String authority) {
		this.id = id;
		this.authority = authority;
	}
	
	
	public RoleDTO(Role entity) {
		id = entity.getId();
		authority = entity.getAuthority();
	}


	public Long getId() {
		return id;
	}


	public String getAuthority() {
		return authority;
	}

}
