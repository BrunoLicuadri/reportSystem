import { UserDTO } from "./user";

export type deliveryDTO = {
	id: number;
	imgUrl: string;
	description: string;
	status: string
	date: string;
	time: string;

	toUser: UserDTO;
}