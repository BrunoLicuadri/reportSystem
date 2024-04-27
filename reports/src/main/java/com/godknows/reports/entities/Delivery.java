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
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="tb_delivery")
public class Delivery {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String imgUrl;
	@Column(columnDefinition="TEXT")
	private String description;
	private DeliveryStatus status;
	private LocalDate date;
	@NotBlank(message="Campo Obrigatório")
	private String time;
	
	@ManyToOne
	@JoinColumn(name="toUser")
	private User toUser;
	
	/*
	@ManyToOne
	@JoinColumn(name="user")
	private User user;
	 */
	
	
	public Delivery() {
	}

	

	public Delivery(Long id, String imgUrl, String description, DeliveryStatus status, LocalDate date, String time, User toUser) {
		this.id = id;
		this.imgUrl = imgUrl;
		this.description = description;
		this.status = status;
		this.date = date;
		this.time = time;
		this.toUser = toUser;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public DeliveryStatus getStatus() {
		return status;
	}

	public void setStatus(DeliveryStatus status) {
		this.status = status;
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

	public User getToUser() {
		return toUser;
	}

	public void setToUser(User toUser) {
		this.toUser = toUser;
	}

}
