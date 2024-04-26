package com.godknows.reports.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.godknows.reports.dtos.ComplaintDTO;
import com.godknows.reports.entities.Complaint;
import com.godknows.reports.repositories.ComplaintRepository;



@Service
public class ComplaintService {

	@Autowired
	private ComplaintRepository repository;
	
	@Transactional(readOnly = true)
	public Page<ComplaintDTO> listAll(String resident, Pageable pageable){
		Page<Complaint> result = repository.searchAll(resident, pageable);
		return result.map( x -> new ComplaintDTO(x));
	}

}
