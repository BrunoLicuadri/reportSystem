package com.godknows.reports.controllers;

import java.net.URI;
import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
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
	
	@GetMapping
	public ResponseEntity<Page<ReportDailyDTO>> findAll(@RequestParam(name="user", defaultValue="")String user, Pageable pageable){
		return ResponseEntity.ok(service.findAll(user, pageable));
	}	
	
	
	@GetMapping(value="/{date}")
	public ResponseEntity<Page<ReportDailyDTO>> findByDate(@PathVariable String date, Pageable pageable) {
		
		Instant localDate = Instant.parse(date); 
		
		Page<ReportDailyDTO> dto = service.serviceFindByDate(localDate, pageable);
		return ResponseEntity.ok(dto);
	}
	
	@PostMapping
	public ResponseEntity<ReportDailyDTO> insert (@RequestBody ReportDailyDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{date}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<ReportDailyDTO> update (@PathVariable Long id, @RequestBody ReportDailyDTO dto){
		dto = service.update(id, dto);
		return ResponseEntity.ok(dto);
	}
	
}
