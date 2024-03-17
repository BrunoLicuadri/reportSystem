package com.godknows.reports.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.godknows.reports.dtos.UserDTO;
import com.godknows.reports.entities.Role;
import com.godknows.reports.services.UserService;


@RestController
@RequestMapping(value="/users")
public class UserController {

	
	@Autowired
	private UserService service;
	
	
	@GetMapping(value="/me")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_VISITOR')")
	public ResponseEntity<UserDTO> getMe() {
		UserDTO dto = service.getme();
		return ResponseEntity.ok(dto);
	}
	
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
	@PostMapping(value="/newuser")
	public ResponseEntity<UserDTO> newUser(@RequestBody UserDTO dto, @RequestBody Role role){
		dto = service.insertUser(dto, role);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{users}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
}
