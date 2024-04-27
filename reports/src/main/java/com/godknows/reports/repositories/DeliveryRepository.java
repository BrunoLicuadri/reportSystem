package com.godknows.reports.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.godknows.reports.entities.Delivery;

public interface DeliveryRepository extends JpaRepository<Delivery, Long>{
	
	@Query("SELECT obj "
			+ "FROM Delivery obj "
			+ "WHERE UPPER(obj.toUser) LIKE UPPER(CONCAT('%', :toUser, '%'))")
	public Page<Delivery> searchAll(String toUser, Pageable pageable);
	
	
	@Query("SELECT obj "
			+ "FROM Delivery obj "
			+ "WHERE UPPER(obj.date) LIKE UPPER(CONCAT(:date, '%'))")
	public Page<Delivery> searchByDate(LocalDate date, Pageable pageable);

}
