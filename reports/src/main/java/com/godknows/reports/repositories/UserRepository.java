package com.godknows.reports.repositories;

import java.util.List;

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
	
	
	
	@Query(value = "SELECT tb_user.name, tb_role.authority FROM tb_user "
			+ "INNER JOIN tb_user_role ON tb_user.id = tb_user_role.user_id "
			+ "INNER JOIN tb_role ON tb_role.id = tb_user_role.role_id "
			+ "WHERE tb_role.authority = UPPER(:role)",
			nativeQuery = true)
	public List<User> searchUsersByRole(String role);
	
	
}
