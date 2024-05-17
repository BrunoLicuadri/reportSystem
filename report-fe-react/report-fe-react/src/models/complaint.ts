import { UserDTO } from "./user";

export type complaintDTO = {
	id: number;
	text: string;
	status: string
	date: string;
	time: string;

	resident: UserDTO;
}

export const ComplaintStatus = [
	{ value: '0', label: 'RESOLVIDO' },
	{ value: '1', label: 'PENDENTE' },
	{ value: '2', label: 'FECHADO' }
]

