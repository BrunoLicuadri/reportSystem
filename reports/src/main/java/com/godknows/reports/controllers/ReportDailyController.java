package com.godknows.reports.controllers;

import java.time.Instant;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.godknows.reports.dtos.ReportDailyDTO;
import com.godknows.reports.services.ReportDailyService;

@RestController
@RequestMapping(value="/report")
public class ReportDailyController {
	
	//DateTimeFormatter reportDate = DateTimeFormatter.ofPattern("dd/MM/yyyy"); 
	
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
	
}
