import { Component, OnInit } from '@angular/core';
import { Cell } from '../models/cell';
import { CELLS } from '../constants';
import { indexToCell } from '../functions';

@Component({
	selector: 'game-ship-board',
	templateUrl: './ship-board.component.html',
	styleUrls: ['../common.scss']
})
export class ShipBoardComponent {
	cells:Cell[] = [];

	constructor() {
		this.cells = Array<Cell>(CELLS * CELLS).fill({
			column: 0,
			row: 0,
			state: 'inactive'
		}).map<Cell>((c, i)=>indexToCell(i));
	}
}
