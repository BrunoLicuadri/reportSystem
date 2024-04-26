package com.godknows.reports.controllers;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.godknows.reports.dtos.ComplaintDTO;
import com.godknows.reports.services.ComplaintService;

@RestController
@RequestMapping(value="/complaints")
public class ComplaintController {

	@Autowired
	private ComplaintService service;
	
	
	@GetMapping(value="/id/{id}")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_VISITOR')")
	public ResponseEntity<ComplaintDTO> findById(@PathVariable Long id){
		ComplaintDTO dto = service.findById(id);
		return ResponseEntity.ok(dto);
	}
	
	
	@GetMapping
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_VISITOR')")
	public ResponseEntity<Page<ComplaintDTO>> listAll(@RequestParam(name="resident", defaultValue="") String resident, Pageable pageable){
		return ResponseEntity.ok(service.listAll(resident, pageable));
	}
	
	
	@GetMapping(value="/preview")
	public ResponseEntity<Page<ComplaintDTO>> previewListAll(@RequestParam(name="resident", defaultValue="") String resident, Pageable pageable){
		return ResponseEntity.ok(service.listAll(resident, pageable));
	}
	
	

	@PostMapping
	@PreAuthorize("hasAnyRole('ROLE_VISITOR', 'ROLE_ADMIN')")
	public ResponseEntity<ComplaintDTO> insert (@Valid @RequestBody ComplaintDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{date}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	
	
	@PutMapping(value="/{id}")
	@PreAuthorize("hasAnyRole('ROLE_VISITOR')")
	public ResponseEntity<ComplaintDTO> update (@PathVariable Long id, @Valid @RequestBody ComplaintDTO dto){
		dto = service.update(id, dto);
		return ResponseEntity.ok(dto);
	}
	
	
	@DeleteMapping(value="/{id}")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
