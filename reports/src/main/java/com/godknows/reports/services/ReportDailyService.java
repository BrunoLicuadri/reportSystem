package com.godknows.reports.services;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.godknows.reports.dtos.ReportDailyDTO;
import com.godknows.reports.entities.ReportDaily;
import com.godknows.reports.entities.User;
import com.godknows.reports.exceptions.ResourceNotFoundException;
import com.godknows.reports.repositories.ReportDailyRepository;
import com.godknows.reports.repositories.UserRepository;

@Service
public class ReportDailyService {
	
	DateTimeFormatter fmt1 = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
	
	@Autowired
	private ReportDailyRepository repository;
	
	@Autowired
	private UserRepository userRepository;
	
	
	
	
	@Transactional(readOnly = true)
	public Page<ReportDailyDTO> findAll(String name, Pageable pageable){
		Page<ReportDaily> result = repository.searchByUser(name, pageable);
		return result.map(x-> new ReportDailyDTO(x));
	}
	
	
	
	
	@Transactional(readOnly = true)
	public Page<ReportDailyDTO> serviceFindByDate(LocalDate date, Pageable pageable) {

		Page<ReportDaily> result = repository.searchByDate(date, pageable);
		if(result.getNumberOfElements() == 0) {
			throw new ResourceNotFoundException("Data informada não localizado.");
		}
		
		return result.map(x-> new ReportDailyDTO(x));
	}
	
	
	
	
	@Transactional
	public ReportDailyDTO insert(ReportDailyDTO dto) {
		ReportDaily entity = new ReportDaily();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ReportDailyDTO(entity);
	}
	
	
	
	
	@Transactional
	public ReportDailyDTO update(Long id, ReportDailyDTO dto) {
		try {
			ReportDaily entity = repository.getReferenceById(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new ReportDailyDTO(entity);
		}
		catch(EntityNotFoundException e){
			throw new ResourceNotFoundException("Relatório não encontrado");
		}
		
	}

	
	
	@Transactional(readOnly=true)
	private void copyDtoToEntity (ReportDailyDTO dto, ReportDaily entity) {
		//entity.setId(dto.getId());
		entity.setDate(dto.getDate());
		entity.setTime(dto.getTime());
		entity.setText(dto.getText());
		User user = userRepository.getReferenceById(dto.getUser().getId());
		entity.setUser(user);
	}
	
}
