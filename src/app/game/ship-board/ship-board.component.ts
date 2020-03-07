import { Component } from '@angular/core';
import { Cell } from '../models/cell';
import { CELLS, CELLSIZE } from '../constants';
import { indexToCell, cellToIndex } from '../functions';
import { Ship } from '../models/ship';
import { ShipFactory } from '../models/ship-factory';

@Component({
	selector: 'game-ship-board',
	templateUrl: './ship-board.component.html',
	styleUrls: ['../common.scss']
})
export class ShipBoardComponent {
	cells:Cell[] = [];

	ships:Ship[] = [
		ShipFactory.create('mothership', {left: 0, top: 0}, 0),
		ShipFactory.create('assault', {left: CELLSIZE, top: 0}, 0),
		ShipFactory.create('assault', {left: CELLSIZE * 2, top: 0}, 0),
		ShipFactory.create('explorer', {left: CELLSIZE * 3, top: 0}, 0),
		ShipFactory.create('explorer', {left: CELLSIZE * 4, top: 0}, 0),
		ShipFactory.create('explorer', {left: CELLSIZE * 5, top: 0}, 0),
		ShipFactory.create('miner', {left: CELLSIZE * 6, top: 0}, 0),
		ShipFactory.create('miner', {left: CELLSIZE * 7, top: 0}, 0),
		ShipFactory.create('miner', {left: CELLSIZE * 8, top: 0}, 0),
		ShipFactory.create('miner', {left: CELLSIZE * 9, top: 0}, 0),
	]

	constructor() {
		this.cells = Array<Cell>(CELLS * CELLS).fill({
			column: 0,
			row: 0,
			state: 'inactive'
		}).map<Cell>((c, i)=>indexToCell(i));
	}

	validateBoard(){
		const cells = new Map<number,number>();
		this.cells.forEach((c, i) => {
			this.cells[i].state = 'inactive';
		});
		let valid = true;
		for (const ship of this.ships) {
			const cellsShip = ship.getCells();
			for (const cell of cellsShip) {
				const index = cellToIndex(cell);
				const count = cells.get(index);
				if(count){
					valid = false;
					this.cells[index].state = 'fail';
				}else{
					this.cells[index].state = 'valid';
					cells.set(index, 1);
				}
			}
		}
		return valid;
	}
}
