import { Component, OnInit } from '@angular/core';
import { Cell } from '../models/cell';
import { CELLS, CELLSIZE } from '../constants';
import { indexToCell } from '../functions';
import { CdkDrag } from '@angular/cdk/drag-drop';

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
	nearCell(ship:CdkDrag){
		const regex = /translate3d\((\d+)px, (\d+)px, (\d+)px\)/;
		const match = regex.exec(ship.element.nativeElement.style.transform);
		const [x,y] = [Math.round(+match[1] / CELLSIZE) * CELLSIZE, Math.round(+match[2] / CELLSIZE) * CELLSIZE];
		ship.element.nativeElement.classList.add('animate');
		ship._dragRef.setFreeDragPosition({x, y});
		setTimeout(() => {
			ship.element.nativeElement.classList.remove('animate');
		}, 205);
	}
}
