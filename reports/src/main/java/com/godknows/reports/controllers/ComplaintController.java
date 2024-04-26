package com.godknows.reports.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.godknows.reports.dtos.ComplaintDTO;
import com.godknows.reports.services.ComplaintService;

@RestController
@RequestMapping(value="/complaints")
public class ComplaintController {

	@Autowired
	private ComplaintService service;
	
	@GetMapping
	@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_USER','ROLE_VISITOR')")
	public ResponseEntity<Page<ComplaintDTO>> listAll(@RequestParam(name="resident", defaultValue="") String resident, Pageable pageable){
		return ResponseEntity.ok(service.listAll(resident, pageable));
	}

}
