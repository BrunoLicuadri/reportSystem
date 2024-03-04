package com.godknows.reports.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.godknows.reports.dtos.ReportDailyDTO;
import com.godknows.reports.entities.ReportDaily;
import com.godknows.reports.exceptions.ResourceNotFoundException;
import com.godknows.reports.repositories.ReportDailyRepository;

@Service
public class ReportDailyService {

	// DateTimeFormatter reportDate = DateTimeFormatter.ofPattern("dd/MM/yyyy"); 
	

	
	@Autowired
	private ReportDailyRepository repository;
	
	@Transactional(readOnly = true)
	public Page<ReportDailyDTO> findAll(String name, Pageable pageable){
		Page<ReportDaily> result = repository.searchByUser(name, pageable);
		return result.map(x-> new ReportDailyDTO(x));
	}
	
	
	@Transactional(readOnly = true)
	public Page<ReportDailyDTO> serviceFindByDate(Instant date, Pageable pageable) {

		// LocalDate localDate = LocalDate.parse(date, reportDate); 

		Page<ReportDaily> result = repository.searchByDate(date, pageable);
		if(result.getSize() == 0) {
			throw new ResourceNotFoundException("Recurso não localizado.");
		}
		return result.map(x-> new ReportDailyDTO(x));
	}
	
	
}
