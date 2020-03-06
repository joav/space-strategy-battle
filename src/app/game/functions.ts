import { Cell, CellState } from './models/cell';
import { CELLS, CELLSIZE } from './constants';
import { DOMCoord } from './models/dom-coord';

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

export function DOMCoordToCell(coord:DOMCoord):Cell {
	return {
		row: coord.top / CELLSIZE,
		column: coord.left / CELLSIZE
	}
}
