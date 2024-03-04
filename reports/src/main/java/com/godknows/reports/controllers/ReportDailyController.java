package com.godknows.reports.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
	
	
}
