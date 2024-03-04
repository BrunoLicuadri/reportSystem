package com.godknows.reports.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.godknows.reports.entities.ReportDaily;

public interface ReportDailyRepository extends JpaRepository<ReportDaily, Long>{
	
	@Query("SELECT obj "
			+ "FROM ReportDaily obj "
			+ "WHERE UPPER(obj.user) LIKE UPPER(CONCAT('%', :user, '%'))")
	public Page<ReportDaily> searchByUser(String user, Pageable pageable);

}
