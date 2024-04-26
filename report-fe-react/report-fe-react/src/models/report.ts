import { UserDTO } from "./user";


export type reportDTO = {
	id: number;
	text: string;
	date: string;
	time: string;

	user: UserDTO;
}

const reports = [
	{
		id: 1,
		date: "25/07/2022",
		time: "05:00",
		text: "Queda de energia das 05:00 as 06:22",
		user: {
			id: 1,
			name: "Porteiro 1"
		}
	},
	{
		id: 2,
		date: "29/07/2022",
		time: "15:15",
		text: "Morador 1818 retirou sua encomenda",
		user: {
			id: 2,
			name: "Porteiro 2"
		}
	},
	{
		id: 3,
		date: "03/08/2022",
		time: "18:22",
		text: "Briga de casal e Polícia acionado. Sindicos cientes.",
		user: {
			id: 3,
			name: "Porteiro 3"
		}
	},
	{
		id: 4,
		date: "03/08/2022",
		time: "21:22",
		text: "Elevador parado. BTA acionado e aguardando retorno.",
		user: {
			id: 4,
			name: "Porteiro 4"
		}
	},
	{
		id: 5,
		date: "04/08/2022",
		time: "07:00",
		text: "Morador X reportou vazamento de água.",
		user: {
			id: 1,
			name: "Porteiro 1"
		}
	},
	{
		id: 6,
		date: "04/08/2022",
		time: "15:15",
		text: "Morador reclamou das esteiras da academia quebrada.",
		user: {
			id: 1,
			name: "Porteiro 1"
		}
	},
	{
		id: 7,
		date: "04/08/2022",
		time: "19:22",
		text: "Lampadas queimadas aqui e acolá.",
		user: {
			id: 2,
			name: "Porteiro 2"
		}
	},
	{
		id: 8,
		date: "04/08/2022",
		time: "21:22",
		text: "Novo hóspede para o 403.",
		user: {
			id: 2,
			name: "Porteiro 2"
		}
	},
	{
		id: 9,
		date: "05/08/2022",
		time: "08:00",
		text: "Piscineiro interditou a piscina atá amanhã.",
		user: {
			id: 3,
			name: "Porteiro 3"
		}
	},
	{
		id: 10,
		date: "05/08/2022",
		time: "16:25",
		text: "Cistena e gerador verificados e tudo ok.",
		user: {
			id: 3,
			name: "Porteiro 3"
		}
	},
	{
		id: 11,
		date: "06/08/2022",
		time: "07:42",
		text: "Moradores informaram a troca de carro para HB20 Prata.",
		user: {
			id: 4,
			name: "Porteiro 4"
		}
	},
	{
		id: 12,
		date: "06/08/2022",
		time: "23:22",
		text: "Moradores utilizaram da churrasqueira e não limparam.",
		user: {
			id: 4,
			name: "Porteiro 4"
		}
	},
]

export function getReports(){
	return reports;
}

export function getReport(id: number){

	return reports.find( (rep) => rep.id === id);
}