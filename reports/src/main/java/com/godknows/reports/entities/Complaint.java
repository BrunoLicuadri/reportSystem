package com.godknows.reports.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="tb_complaint")
public class Complaint {
	
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	private LocalDate date;
	private String time;
	@Column(columnDefinition = "TEXT")
	private String text;
	private ComplaintStatus status;
	
	@ManyToOne
    @JoinColumn(name="user_id")
	private User resident;
	
	

	public Complaint() {
	}


	public Complaint(Long id, LocalDate date, String time, String text, ComplaintStatus status, User resident) {
		this.id = id;
		this.date = date;
		this.time = time;
		this.text = text;
		this.status = status;
		this.resident = resident;
	}


	

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}


	public String getTime() {
		return time;
	}


	public void setTime(String time) {
		this.time = time;
	}


	public String getText() {
		return text;
	}


	public void setText(String text) {
		this.text = text;
	}
	

	public ComplaintStatus getStatus() {
		return status;
	}


	public void setStatus(ComplaintStatus status) {
		this.status = status;
	}


	public User getUser() {
		return resident;
	}


	public void setUser(User resident) {
		this.resident = resident;
	}

}
