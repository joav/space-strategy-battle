import { Player } from './player';

export type ActiveGame = {
	id:string;
	creation_date:Date;
	player1:Player;
	player2:Player;
	canPlay?:boolean;
};

export const activesMock:ActiveGame[] = [
	{
		id: 'abcd',
		creation_date: new Date(),
		player1: {
			name: 'Player 1'
		},
		player2: {
			name: 'Player 2'
		}
	},
	{
		id: 'cdef',
		creation_date: new Date(),
		player1: {
			name: 'Player 1'
		},
		player2: {
			name: 'Player 409'
		}
	},
	{
		id: 'efgh',
		creation_date: new Date(),
		player1: {
			name: 'Player 1'
		},
		player2: {
			name: 'Player 268'
		}
	},
];
