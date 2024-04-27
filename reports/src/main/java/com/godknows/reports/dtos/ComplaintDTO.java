package com.godknows.reports.dtos;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.godknows.reports.entities.Complaint;
import com.godknows.reports.entities.ComplaintStatus;

public class ComplaintDTO {

	private Long id;
	private LocalDate date;
	@NotBlank(message="Campo Obrigatório")
	private String time;
	@NotBlank(message="Campo Obrigatório")
    @Size(min=10,max=500, message="Mínimo de 10 e Máximo de 500 caracteres.")
	private String text;
	private ComplaintStatus status;

	private UserDTO resident;


	
	public ComplaintDTO(Long id, LocalDate date, String time, String text, ComplaintStatus status, UserDTO resident) {
			this.id = id;
			this.date = date;
			this.time = time;
			this.text = text;
			this.status = status;
			this.resident = resident;
		}
	
	
	
	public ComplaintDTO(Complaint entity) {
		id = entity.getId();
		date = entity.getDate();
		time = entity.getTime();
		text = entity.getText();
		status = entity.getStatus();
		resident = new UserDTO(entity.getUser());
	}

	
	
	
	public Long getId() {
		return id;
	}

	public LocalDate getDate() {
		return date;
	}

	public String getTime() {
		return time;
	}

	public String getText() {
		return text;
	}
	

	public ComplaintStatus getStatus() {
		return status;
	}


	public UserDTO getResident() {
		return resident;
	}

}
