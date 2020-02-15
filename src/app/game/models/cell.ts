export interface Cell {
	column:number;
	row:number;
	state:CellState;
}

export type CellState = 'inactive'|'valid'|'fail';
