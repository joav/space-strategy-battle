import { Ship } from '../game/models/ship';

export type Board = {
	id:string;
	name:string;
	img:string;
	ships?:Ship[];
};

export const boards:Board[] = [
	{
		id: 'poi',
		name: 'Mi primer tablero',
		img: '/assets/imgs/background-1.jpg'
	},
	{
		id: 'poi',
		name: 'Mi segundo tablero',
		img: '/assets/imgs/background-1.jpg'
	},
	{
		id: 'poi',
		name: 'Mi tercer tablero',
		img: '/assets/imgs/background-1.jpg'
	},
];
