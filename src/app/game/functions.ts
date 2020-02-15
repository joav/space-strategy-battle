import { Cell, CellState } from './models/cell';
import { CELLS } from './constants';

export function indexToCell(i:number, state:CellState = 'inactive'):Cell {
	return {
		column: i % CELLS,
		row: Math.floor(i / CELLS),
		state: state
	};
}

export function cellToIndex(cell:Cell) {
	return cell.row * CELLS + cell.column;
}
