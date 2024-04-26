package com.godknows.reports.services;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.godknows.reports.dtos.ComplaintDTO;
import com.godknows.reports.dtos.ReportDailyDTO;
import com.godknows.reports.entities.Complaint;
import com.godknows.reports.entities.ReportDaily;
import com.godknows.reports.entities.User;
import com.godknows.reports.exceptions.DataBaseException;
import com.godknows.reports.exceptions.ResourceNotFoundException;
import com.godknows.reports.repositories.ComplaintRepository;
import com.godknows.reports.repositories.UserRepository;



@Service
public class ComplaintService {

	@Autowired
	private ComplaintRepository repository;
	
	@Autowired
	private UserRepository userRepository;
	
	
	@Transactional(readOnly = true)
	public Page<ComplaintDTO> listAll(String resident, Pageable pageable){
		Page<Complaint> result = repository.searchAll(resident, pageable);
		return result.map( x -> new ComplaintDTO(x));
	}

	
	@Transactional(readOnly=true)
	public ComplaintDTO findById(Long id) {
		Complaint complaint = repository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Recurso não encontrado."));
		return new ComplaintDTO(complaint);
	}
	
	
	@Transactional
	public ComplaintDTO insert(ComplaintDTO dto) {
		Complaint entity = new Complaint();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ComplaintDTO(entity);
	}
	
	
	@Transactional
	public ComplaintDTO update(Long id, ComplaintDTO dto) {
		try {
			Complaint entity = repository.getReferenceById(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new ComplaintDTO(entity);
		}
		catch(EntityNotFoundException e){
			throw new ResourceNotFoundException("Reclamação ou Id não encontrado");
		}
	}
	
	
	@Transactional(propagation = Propagation.SUPPORTS)
	public void delete(Long id) {
		if ( !repository.existsById(id)) {
			throw new ResourceNotFoundException("Reclamação id não encontrado ou inexistente.");
			}
		try {
			repository.deleteById(id);
			}
		catch(DataIntegrityViolationException e) {
			throw new DataBaseException("Falha de integridade referencial. Dado ativo ou em uso.");
		}
	}
	
	
	
	private void copyDtoToEntity (ComplaintDTO dto, Complaint entity) {
		entity.setDate(dto.getDate());
		entity.setTime(dto.getTime());
		entity.setText(dto.getText());
		entity.setStatus(dto.getStatus());
		User user = userRepository.getReferenceById(dto.getResident().getId());
		entity.setUser(user);
	}
}
