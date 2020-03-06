import { Component, OnInit } from '@angular/core';
import { Cell } from '../models/cell';
import { CELLS, CELLSIZE } from '../constants';
import { indexToCell } from '../functions';
import { CdkDrag } from '@angular/cdk/drag-drop';
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
		// ShipFactory.create('3', {left: CELLSIZE, top: 0}, 0),
		// ShipFactory.create('3', {left: CELLSIZE * 2, top: 0}, 0),
		ShipFactory.create('2', {left: CELLSIZE * 3, top: 0}, 0),
		ShipFactory.create('2', {left: CELLSIZE * 4, top: 0}, 0),
		ShipFactory.create('2', {left: CELLSIZE * 5, top: 0}, 0),
		ShipFactory.create('1', {left: CELLSIZE * 6, top: 0}, 0),
		ShipFactory.create('1', {left: CELLSIZE * 7, top: 0}, 0),
		ShipFactory.create('1', {left: CELLSIZE * 8, top: 0}, 0),
		ShipFactory.create('1', {left: CELLSIZE * 9, top: 0}, 0),
	]

	r = 0;
	lastDragging = false;

	constructor() {
		this.cells = Array<Cell>(CELLS * CELLS).fill({
			column: 0,
			row: 0,
			state: 'inactive'
		}).map<Cell>((c, i)=>indexToCell(i));
	}
	// nearCell(ship:CdkDrag){
	// 	this.lastDragging = true;
	// 	const pos = ship._dragRef.getFreeDragPosition();
	// 	const [x,y] = [Math.round(+pos.x / CELLSIZE) * CELLSIZE, Math.round(+pos.y / CELLSIZE) * CELLSIZE];
	// 	ship.element.nativeElement.classList.add('animate');
	// 	ship._dragRef.setFreeDragPosition({x, y});
	// 	setTimeout(() => {
	// 		ship.element.nativeElement.classList.remove('animate');
	// 	}, 205);
	// }
	// rot(ship:CdkDrag){
	// 	if(!this.lastDragging){
	// 		this.r = (this.r + 90) % 360;
	// 		const pos = ship._dragRef.getFreeDragPosition();
	// 		if(this.r == 0){
	// 			const [x,y] = [(Math.round(+pos.x / CELLSIZE) * CELLSIZE) + CELLSIZE, (Math.round(+pos.y / CELLSIZE) * CELLSIZE) - CELLSIZE];
	// 			ship._dragRef.setFreeDragPosition({x, y});
	// 		}
	// 		if(this.r == 90){
	// 			const [x,y] = [Math.round(+pos.x / CELLSIZE) * CELLSIZE, (Math.round(+pos.y / CELLSIZE) * CELLSIZE) + CELLSIZE];
	// 			ship._dragRef.setFreeDragPosition({x, y});
	// 		}
	// 		if(this.r == 270){
	// 			const [x,y] = [(Math.round(+pos.x / CELLSIZE) * CELLSIZE) - CELLSIZE, (Math.round(+pos.y / CELLSIZE) * CELLSIZE)];
	// 			ship._dragRef.setFreeDragPosition({x, y});
	// 		}
	// 	}
	// 	this.lastDragging = false;
	// }
}
