package com.godknows.reports.dtos;

import java.time.LocalDate;
import javax.validation.constraints.*;
import com.godknows.reports.entities.ReportDaily;

public class ReportDailyDTO {

	private Long id;
	@NotBlank(message="Campo Obrigatório")
    @Size(min=10,max=500, message="Mínimo de 10 e Máximo de 500 caracteres.")
	private String text;
	
	private LocalDate date;
	@NotBlank(message="Campo Obrigatório")
	private String time;
	
	private UserDTO user;
	
	
	public ReportDailyDTO() {
	}


	public ReportDailyDTO(Long id, String text, LocalDate date, String time, UserDTO user) {
		this.id = id;
		this.text = text;
		this.date = date;
		this.time=time;
		this.user = user;
	}
	
	public ReportDailyDTO(ReportDaily entity) {
		id = entity.getId();
		text = entity.getText();
		date = entity.getDate();
		time = entity.getTime();
		user = new UserDTO(entity.getUser());
	}


	public Long getId() {
		return id;
	}


	public String getText() {
		return text;
	}


	public LocalDate getDate() {
		return date;
	}
	
	
	public String getTime() {
		return time;
	}


	public UserDTO getUser() {
		return user;
	}
	

}
