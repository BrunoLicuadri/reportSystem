package com.godknows.reports.repositories;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.godknows.reports.entities.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint, Long>{

	@Query("SELECT obj "
			+ "FROM Complaint obj "
			+ "WHERE UPPER(obj.resident) LIKE UPPER(CONCAT('%', :resident, '%'))")
	public Page<Complaint> searchAll(String resident, Pageable pageable);
}
