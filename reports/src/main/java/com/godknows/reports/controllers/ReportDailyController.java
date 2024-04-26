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

import com.godknows.reports.dtos.ReportDailyDTO;
import com.godknows.reports.services.ReportDailyService;

@RestController
@RequestMapping(value="/report")
public class ReportDailyController {
	
	
	@Autowired
	private ReportDailyService service;
	
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_VISITOR')")
	@GetMapping(value="/id/{id}")
	public ResponseEntity<ReportDailyDTO> findById (@PathVariable Long id){
		ReportDailyDTO reportDto = service.findById(id);
		return ResponseEntity.ok(reportDto);
	}
	
	
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_VISITOR')")
	@GetMapping
	public ResponseEntity<Page<ReportDailyDTO>> findAll(@RequestParam(name="user", defaultValue="")String user, Pageable pageable){
		return ResponseEntity.ok(service.findAll(user, pageable));
	}	
	
	
	@GetMapping(value="/preview")
	public ResponseEntity<Page<ReportDailyDTO>> findAllPreview(@RequestParam(name="user", defaultValue="")String user, Pageable pageable){
		return ResponseEntity.ok(service.previewFindAll(user, pageable));
	}

	
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_VISITOR')")
	@GetMapping(value="/{localDate}")
	public ResponseEntity<Page<ReportDailyDTO>> findByDate(@PathVariable String localDate, Pageable pageable) {
		
		LocalDate date = LocalDate.parse(localDate);
		
		Page<ReportDailyDTO> dto = service.serviceFindByDate(date, pageable);
		return ResponseEntity.ok(dto);
	}
	
	
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
	@PostMapping
	public ResponseEntity<ReportDailyDTO> insert (@Valid @RequestBody ReportDailyDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{date}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER')")
	@PutMapping(value="/{id}")
	public ResponseEntity<ReportDailyDTO> update (@PathVariable Long id, @Valid @RequestBody ReportDailyDTO dto){
		dto = service.update(id, dto);
		return ResponseEntity.ok(dto);
	}
	
	
	@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
	@DeleteMapping(value="/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
