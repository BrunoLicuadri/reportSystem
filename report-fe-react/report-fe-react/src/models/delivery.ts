import { UserDTO } from "./user";

export type DeliveryDTO = {

	id: number;
	imgUrl: string;
	description: string;
	status: string
	date: string;
	time: string;

	toUser: UserDTO;
}