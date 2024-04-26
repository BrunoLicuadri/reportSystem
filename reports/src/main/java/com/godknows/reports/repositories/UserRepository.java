package com.godknows.reports.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.godknows.reports.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByName(String name); //QueryMethods
	
	
	@Query("SELECT obj "
			+ "FROM User obj ")
	public Page<User> searchUsers(Pageable pageable);
}
