import { Component } from '@angular/core';
import { Cell } from '../models/cell';
import { CELLS, CELLSIZE } from '../constants';
import { indexToCell } from '../functions';
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
		// ShipFactory.create('4', {left: 0, top: 0}, 0),
		ShipFactory.create('3', {left: CELLSIZE, top: 0}, 0),
		ShipFactory.create('3', {left: CELLSIZE * 2, top: 0}, 0),
		ShipFactory.create('2', {left: CELLSIZE * 3, top: 0}, 0),
		ShipFactory.create('2', {left: CELLSIZE * 4, top: 0}, 0),
		ShipFactory.create('2', {left: CELLSIZE * 5, top: 0}, 0),
		ShipFactory.create('1', {left: CELLSIZE * 6, top: 0}, 0),
		ShipFactory.create('1', {left: CELLSIZE * 7, top: 0}, 0),
		ShipFactory.create('1', {left: CELLSIZE * 8, top: 0}, 0),
		ShipFactory.create('1', {left: CELLSIZE * 9, top: 0}, 0),
	]

	constructor() {
		this.cells = Array<Cell>(CELLS * CELLS).fill({
			column: 0,
			row: 0,
			state: 'inactive'
		}).map<Cell>((c, i)=>indexToCell(i));
	}
}
