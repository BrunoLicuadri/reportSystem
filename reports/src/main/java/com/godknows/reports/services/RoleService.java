package com.godknows.reports.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.godknows.reports.dtos.RoleDTO;
import com.godknows.reports.entities.Role;
import com.godknows.reports.repositories.RoleRepository;

@Service
public class RoleService {

	@Autowired
	private RoleRepository repository;

	@Transactional(readOnly = true)
	public List<RoleDTO> findAll() {
		List<Role> result = repository.findAll();
		return result.stream().map(x -> new RoleDTO(x)).toList();
	}
}
