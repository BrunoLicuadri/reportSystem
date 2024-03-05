package com.godknows.reports.dtos;

import java.time.Instant;

import com.godknows.reports.entities.ReportDaily;

public class ReportDailyDTO {

	private Long id;
	private String text;
	private Instant moment;
	
	private UserDTO user;
	
	
	public ReportDailyDTO() {
	}


	public ReportDailyDTO(Long id, String text, Instant moment, UserDTO user) {
		this.id = id;
		this.text = text;
		this.moment = moment;
		this.user = user;
	}
	
	public ReportDailyDTO(ReportDaily entity) {
		id = entity.getId();
		text = entity.getText();
		moment = entity.getMoment();
		user = new UserDTO(entity.getUser());
	}


	public Long getId() {
		return id;
	}


	public String getText() {
		return text;
	}


	public Instant getMoment() {
		return moment;
	}


	public UserDTO getUser() {
		return user;
	}
	

}
