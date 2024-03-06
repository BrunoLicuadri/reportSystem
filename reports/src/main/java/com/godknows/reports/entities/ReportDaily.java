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
@Table(name = "tb_report")
public class ReportDaily {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(columnDefinition="TEXT")
	private String text;
	private LocalDate date;
	private String time;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;

	
	public ReportDaily() {
	}


	public ReportDaily(Long id, String text, LocalDate date,String time, User user) {
		this.id = id;
		this.text = text;
		this.date = date;
		this.time = time;
		this.user = user;
	}


	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getText() {
		return text;
	}


	public void setText(String text) {
		this.text = text;
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


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}

	
}
