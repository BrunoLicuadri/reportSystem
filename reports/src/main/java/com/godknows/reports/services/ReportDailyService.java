package com.godknows.reports.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.godknows.reports.dtos.ReportDailyDTO;
import com.godknows.reports.entities.ReportDaily;
import com.godknows.reports.repositories.ReportDailyRepository;

@Service
public class ReportDailyService {

	@Autowired
	private ReportDailyRepository repository;
	
	@Transactional(readOnly = true)
	public Page<ReportDailyDTO> findAll(String name, Pageable pageable){
		Page<ReportDaily> result = repository.searchByUser(name, pageable);
		return result.map(x-> new ReportDailyDTO(x));
	}
}
