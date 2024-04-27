package com.godknows.reports.controllers;

import java.net.URI;
import java.time.LocalDate;

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

import com.godknows.reports.dtos.DeliveryDTO;
import com.godknows.reports.dtos.ReportDailyDTO;
import com.godknows.reports.services.DeliveryServices;

@RestController
@RequestMapping(value="/deliveries")
public class DeliveryController {
	
	@Autowired
	private DeliveryServices service;
	
	
	@GetMapping(value="/id/{id}")
	public ResponseEntity<DeliveryDTO> findById(@PathVariable Long id){
		return ResponseEntity.ok( service.findById(id));
	}
	
	
	@GetMapping
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
	public ResponseEntity<Page<DeliveryDTO>> findAll(@RequestParam(name="toUser", defaultValue="")String toUser, Pageable pageable){
		return ResponseEntity.ok(service.findAll(toUser, pageable));
	}
	
	
	@GetMapping(value="/preview")
	public ResponseEntity<Page<DeliveryDTO>> preview(@RequestParam(name="toUser", defaultValue="")String toUser, Pageable pageable){
		return ResponseEntity.ok(service.findAll(toUser, pageable));
	}
	
	
	
	@GetMapping(value="/{localDate}")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_VISITOR')")
	public ResponseEntity<Page<DeliveryDTO>> findByDate(@PathVariable String localDate, Pageable pageable) {
		
		LocalDate date = LocalDate.parse(localDate);
		
		Page<DeliveryDTO> dto = service.serviceFindByDate(date, pageable);
		return ResponseEntity.ok(dto);
	}
	
	
	@PostMapping
	@PreAuthorize("hasAnyRole('ROLE_USER')")
	public ResponseEntity<DeliveryDTO> insert(@Valid @RequestBody DeliveryDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{date}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
		
	}
	
	
	@PutMapping(value="/{id}")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
	public ResponseEntity<DeliveryDTO> update (@PathVariable Long id, @Valid @RequestBody DeliveryDTO dto){
		dto = service.update(id, dto);
		return ResponseEntity.ok(dto);
	}
	
	
	@DeleteMapping(value="/{id}")
	@PreAuthorize("hasAnyRole('ROLE_USER')")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
