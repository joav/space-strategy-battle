import { Component, OnInit } from '@angular/core';
import { Cell } from '../models/cell';
import { CELLS } from '../constants';
import { indexToCell, cellToIndex } from '../functions';
import { GameService } from '../game.service';

@Component({
	selector: 'game-action-board',
	templateUrl: './action-board.component.html',
	styleUrls: ['../common.scss']
})
export class ActionBoardComponent {
	cells:Cell[] = [];
	constructor(private game:GameService) {
		this.cells = Array<Cell>(CELLS * CELLS).fill({
			column: 0,
			row: 0,
			state: 'inactive'
		}).map<Cell>((c, i)=>indexToCell(i));
	}

	select(cell:Cell){
		this.game.checkImpact(cell).subscribe(state => {
			this.cells[cellToIndex(cell)].state = state;
		});
	}
}
