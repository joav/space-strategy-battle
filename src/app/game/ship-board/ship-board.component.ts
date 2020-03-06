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

	r = 0;
	lastDragging = false;

	constructor() {
		this.cells = Array<Cell>(CELLS * CELLS).fill({
			column: 0,
			row: 0,
			state: 'inactive'
		}).map<Cell>((c, i)=>indexToCell(i));
	}
	nearCell(ship:CdkDrag){
		this.lastDragging = true;
		const pos = ship._dragRef.getFreeDragPosition();
		const [x,y] = [Math.round(+pos.x / CELLSIZE) * CELLSIZE, Math.round(+pos.y / CELLSIZE) * CELLSIZE];
		ship.element.nativeElement.classList.add('animate');
		ship._dragRef.setFreeDragPosition({x, y});
		setTimeout(() => {
			ship.element.nativeElement.classList.remove('animate');
		}, 205);
	}
	rot(ship:CdkDrag){
		if(!this.lastDragging){
			this.r = (this.r + 90) % 360;
			const pos = ship._dragRef.getFreeDragPosition();
			if(this.r == 0){
				const [x,y] = [(Math.round(+pos.x / CELLSIZE) * CELLSIZE) + CELLSIZE, (Math.round(+pos.y / CELLSIZE) * CELLSIZE) - CELLSIZE];
				ship._dragRef.setFreeDragPosition({x, y});
			}
			if(this.r == 90){
				const [x,y] = [Math.round(+pos.x / CELLSIZE) * CELLSIZE, (Math.round(+pos.y / CELLSIZE) * CELLSIZE) + CELLSIZE];
				ship._dragRef.setFreeDragPosition({x, y});
			}
			if(this.r == 270){
				const [x,y] = [(Math.round(+pos.x / CELLSIZE) * CELLSIZE) - CELLSIZE, (Math.round(+pos.y / CELLSIZE) * CELLSIZE)];
				ship._dragRef.setFreeDragPosition({x, y});
			}
		}
		this.lastDragging = false;
	}
}
