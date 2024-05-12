package com.godknows.reports.controllers;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.godknows.reports.dtos.UserDTO;
import com.godknows.reports.dtos.UserMinDTO;
import com.godknows.reports.dtos.UserPasswordDTO;
import com.godknows.reports.services.UserService;


@RestController
@RequestMapping(value="/users")
public class UserController {

	
	@Autowired
	private UserService service;
	
	
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_VISITOR')")
	@GetMapping
	public ResponseEntity<Page<UserDTO>> findAll(Pageable pageable){
		return ResponseEntity.ok(service.findAll(pageable));
	}
	
	
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
	@GetMapping(value="/role/{roleName}")
	public ResponseEntity<List<UserMinDTO>> findUsersByRole(@PathVariable String roleName){
		return ResponseEntity.ok(service.findUsersByRole(roleName));
	}
	
	
	
	@GetMapping(value="/me")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_VISITOR')")
	public ResponseEntity<UserDTO> getMe() {
		UserDTO dto = service.getme();
		return ResponseEntity.ok(dto);
	}
	
	
	
	@GetMapping(value="/user/{username}")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
	public ResponseEntity<UserDTO> getUser(@PathVariable String username) {
		UserDTO dto = service.getUserName(username);
		return ResponseEntity.ok(dto);
	}
	
	
	
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
	@PostMapping(value="/newuser")
	public ResponseEntity<UserPasswordDTO> newUser(@Valid @RequestBody UserPasswordDTO dto){
		dto = service.insertUser(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{users}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
}
