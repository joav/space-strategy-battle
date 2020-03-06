import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Ship } from '../models/ship';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { CELLSIZE } from '../constants';

@Component({
	selector: 'game-ship',
	templateUrl: './ship.component.html',
	styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {
	@Input() ship:Ship;
	@ViewChild('shipDrag',{static: true}) shipDrag:CdkDrag;

	lastDragging = false;

	constructor() { }

	ngOnInit(): void {
		this.shipDrag._dragRef.setFreeDragPosition({x: this.ship.position.left, y: this.ship.position.top});
	}

	nearCell(){
		this.lastDragging = true;
		const pos = this.shipDrag._dragRef.getFreeDragPosition();
		const [x,y] = [Math.round(+pos.x / CELLSIZE) * CELLSIZE, Math.round(+pos.y / CELLSIZE) * CELLSIZE];
		this.shipDrag.element.nativeElement.classList.add('animate');
		this.shipDrag._dragRef.setFreeDragPosition({x, y});
		this.ship.setPosition({x,y});
		setTimeout(() => {
			this.shipDrag.element.nativeElement.classList.remove('animate');
		}, 205);
	}

	rot(shipDrag:CdkDrag){
		if(this.ship.canRotate() && !this.lastDragging){
			this.ship.rotate();
			console.log(this.shipDrag.getFreeDragPosition());
			if(this.ship.shouldCorrectPos()){
				const {x, y} = this.ship.correctPos();
				this.shipDrag._dragRef.setFreeDragPosition({x, y});
				this.ship.setPosition({x,y});
			}
		}
		this.lastDragging = false;
	}
}
