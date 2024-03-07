package com.godknows.reports.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.godknows.reports.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByName(String name); //QueryMethods
	
}
