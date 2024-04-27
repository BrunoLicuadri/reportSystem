package com.godknows.reports.dtos;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.godknows.reports.entities.Delivery;
import com.godknows.reports.entities.DeliveryStatus;

public class DeliveryDTO {
	
	private Long id;
	private String imgUrl;
	@NotBlank(message="Campo Obrigatório")
    @Size(min=10,max=500, message="Mínimo de 10 e Máximo de 500 caracteres.")
	private String description;
	private DeliveryStatus status;
	private LocalDate date;
	@NotBlank(message="Campo Obrigatório")
	private String time;
	
	private UserDTO toUser;
	
	


	public DeliveryDTO(Long id, String imgUrl, String description, DeliveryStatus status, LocalDate date, String time, UserDTO toUser) {
		this.id = id;
		this.imgUrl = imgUrl;
		this.description = description;
		this.status = status;
		this.date = date;
		this.time = time;
		this.toUser = toUser;
	}




	public DeliveryDTO(Delivery entity) {
		id = entity.getId();
		imgUrl = entity.getImgUrl();
		description = entity.getDescription();
		status = entity.getStatus();
		date = entity.getDate();
		time = entity.getTime();
		toUser = new UserDTO(entity.getToUser());
	}




	public Long getId() {
		return id;
	}


	public String getImgUrl() {
		return imgUrl;
	}


	public String getDescription() {
		return description;
	}


	public DeliveryStatus getStatus() {
		return status;
	}


	public LocalDate getDate() {
		return date;
	}


	public String getTime() {
		return time;
	}


	public UserDTO getToUser() {
		return toUser;
	}

}
