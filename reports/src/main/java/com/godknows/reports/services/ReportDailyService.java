package com.godknows.reports.services;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.godknows.reports.dtos.ReportDailyDTO;
import com.godknows.reports.entities.ReportDaily;
import com.godknows.reports.entities.User;
import com.godknows.reports.exceptions.DataBaseException;
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
	
	
	@Transactional(readOnly=true)
	public ReportDailyDTO findById(Long id) {
		ReportDaily report = repository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Recurso não encontrado."));
		return new ReportDailyDTO(report);
	}
	
	
	
	@Transactional(readOnly = true)
	public Page<ReportDailyDTO> findAll(String name, Pageable pageable){
		Page<ReportDaily> result = repository.searchByUser(name, pageable);
		return result.map(x-> new ReportDailyDTO(x));
	}
	
	
	@Transactional(readOnly = true)
	public Page<ReportDailyDTO> previewFindAll(String name, Pageable pageable){
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
	
	
	@Transactional(propagation = Propagation.SUPPORTS)
	public void delete(Long id) {
		if ( !repository.existsById(id)) {
			throw new ResourceNotFoundException("Relatório não encontrado ou inexistente.");
			}
		try {
			repository.deleteById(id);
			}
		catch(DataIntegrityViolationException e) {
			throw new DataBaseException("Falha de integridade referencial. Relatório em uso.");
		}
	}

	
	/*
	private void copyDtoToEntity (ReportDailyDTO dto, ReportDaily entity) {
		entity.setDate(dto.getDate());
		entity.setTime(dto.getTime());
		entity.setText(dto.getText());
		User user = userRepository.getReferenceById(dto.getUser().getId());
		entity.setUser(user);
	}
	 */
	private void copyDtoToEntity (ReportDailyDTO dto, ReportDaily entity) {
		entity.setDate(dto.getDate());
		entity.setTime(dto.getTime());
		entity.setText(dto.getText());

		User userByName = userRepository.findByName(dto.getUser().getName());
		User user = userRepository.getReferenceById(userByName.getId());

		entity.setUser(userByName);
	}

}
