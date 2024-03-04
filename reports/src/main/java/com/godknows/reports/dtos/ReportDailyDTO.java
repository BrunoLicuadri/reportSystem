package com.godknows.reports.dtos;

import java.time.Instant;

import com.godknows.reports.entities.ReportDaily;
import com.godknows.reports.entities.User;

public class ReportDailyDTO {

	private Long id;
	private String text;
	private Instant moment;
	
	private User user;
	
	
	public ReportDailyDTO() {
	}


	public ReportDailyDTO(Long id, String text, Instant moment, User user) {
		this.id = id;
		this.text = text;
		this.moment = moment;
		this.user = user;
	}
	
	public ReportDailyDTO(ReportDaily entity) {
		id = entity.getId();
		text = entity.getText();
		moment = entity.getMoment();
		user = entity.getUser();
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


	public User getUser() {
		return user;
	}
	

}
