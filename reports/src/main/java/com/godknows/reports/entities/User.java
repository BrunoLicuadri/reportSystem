package com.godknows.reports.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


@SuppressWarnings("serial")
@Entity
@Table(name="tb_user")
public class User implements UserDetails{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	private String phone;
	private LocalDate birthDate;
	private String password;
	private Integer unit;
	
	
	@OneToMany(mappedBy ="user")
	private List<ReportDaily> reports = new ArrayList<>();
	
	
	
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(name ="tb_user_role",
			joinColumns = @JoinColumn(name="user_id"),
			inverseJoinColumns = @JoinColumn(name="role_id"))
	private Set<Role> roles = new HashSet<>();
	
	
	
	@OneToMany(mappedBy="resident")
	private List<Complaint> complaints = new ArrayList<>();
	
	@OneToMany(mappedBy="toUser")
	private List<Delivery> toUserDeliveries = new ArrayList<>();
	

	//@OneToMany(mappedBy="user")
	//private List<Delivery> userDeliveries = new ArrayList<>();
	
	
	
	public User() {
	}


	public User(Long id, String name, String email, String phone, LocalDate birthDate, String password) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.birthDate = birthDate;
		this.password = password;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public LocalDate getBirthDate() {
		return birthDate;
	}


	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
	
	
	public Integer getUnit() {
		return unit;
	}


	public void setUnit(Integer unit) {
		this.unit = unit;
	}


	public List<ReportDaily> getReports() {
		return reports;
	}
	
	public List<Complaint> getComplaints() {
		return complaints;
	}

	public List<Delivery> getToUserDeliveries() {
		return toUserDeliveries;
	}


	public Set<Role> getRoles() {
		return roles;
	}

	
	public void addRole(Role role) {
    	roles.add(role);
    }
	

	public boolean hasRole(String roleName) {
		for (Role role : roles) {
			if (role.getAuthority().equals(roleName)) {
				return true;
			}
		}
		return false;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(id, other.id);
	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return roles;
	}


	@Override
	public String getUsername() {
		return name;
	}


	@Override
	public boolean isAccountNonExpired() {
		return true;
	}


	@Override
	public boolean isAccountNonLocked() {
		return true;
	}


	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}


	@Override
	public boolean isEnabled() {
		return true;
	}
	

}
