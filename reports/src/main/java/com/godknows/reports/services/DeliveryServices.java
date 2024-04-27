package com.godknows.reports.services;

import java.time.LocalDate;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.godknows.reports.dtos.DeliveryDTO;
import com.godknows.reports.entities.Delivery;
import com.godknows.reports.entities.User;
import com.godknows.reports.exceptions.DataBaseException;
import com.godknows.reports.exceptions.ResourceNotFoundException;
import com.godknows.reports.repositories.DeliveryRepository;
import com.godknows.reports.repositories.UserRepository;

@Service
public class DeliveryServices {

	@Autowired
	private DeliveryRepository repository;
	
	@Autowired
	private UserRepository userRepository;
	
	
	
	@Transactional(readOnly=true)
	public DeliveryDTO findById(Long id) {
		Delivery entity = repository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Encomenda não encontrado."));
		return new DeliveryDTO(entity);
	}
	
	
	@Transactional(readOnly=true)
	public Page<DeliveryDTO> findAll(String userTo, Pageable pageable){
		Page<Delivery> result = repository.searchAll(userTo, pageable);
		return result.map(x -> new DeliveryDTO(x));
	}
	
	
	
	@Transactional(readOnly = true)
	public Page<DeliveryDTO> serviceFindByDate(LocalDate date, Pageable pageable) {

		Page<Delivery> result = repository.searchByDate(date, pageable);
		if(result.getNumberOfElements() == 0) {
			throw new ResourceNotFoundException("Nenhuma encomenda registrada para essa data.");
		}
		
		return result.map(x-> new DeliveryDTO(x));
	}
	
	@Transactional
	public DeliveryDTO insert(DeliveryDTO dto) {
		Delivery entity = new Delivery();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new DeliveryDTO(entity);
		
	}
	
	
	@Transactional
	public DeliveryDTO update(Long id, DeliveryDTO dto) {
		try {
			Delivery entity = repository.getReferenceById(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new DeliveryDTO(entity);
		}
		catch(EntityNotFoundException e){
			throw new ResourceNotFoundException("Relatório não encontrado");
		}
		
	}
	
	
	@Transactional(propagation = Propagation.SUPPORTS)
	public void delete(Long id) {
		if ( !repository.existsById(id)) {
			throw new ResourceNotFoundException("Encomenda não encontrada ou inexistente.");
			}
		try {
			repository.deleteById(id);
			}
		catch(DataIntegrityViolationException e) {
			throw new DataBaseException("Falha de integridade referencial. Relatório de encomenda em uso.");
		}
	}
	
	
	
	private void copyDtoToEntity (DeliveryDTO dto, Delivery entity) {
		//entity.setId(dto.getId());
		entity.setImgUrl(dto.getImgUrl());
		entity.setDate(dto.getDate());
		entity.setTime(dto.getTime());
		entity.setDescription(dto.getDescription());
		entity.setStatus(dto.getStatus());
		User toUser = userRepository.getReferenceById(dto.getToUser().getId());
		entity.setToUser(toUser);
	}
	
	
}
