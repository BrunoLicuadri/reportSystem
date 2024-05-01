import { UserDTO } from "./user";

export type complaintDTO = {
    id: number;
	text: string;
	status: string
	date: string;
	time: string;

	resident: UserDTO;
}