import { ShipComplex } from './ship-complex';
import { DOMCoord } from './dom-coord';
import { Cell } from './cell';
import { DOMCoordToCell } from '../functions';
import { CELLSIZE } from '../constants';

export class AssaultShip extends ShipComplex {
	constructor(position:DOMCoord, orientation = 0){
		super(3, '3', position, orientation);
	}
	getPrimaryCell():Cell {
		switch(this.orientation){
			case 0:
				return DOMCoordToCell({
					left: this.position.left,
					top: this.position.top + CELLSIZE * 2
				});
			case 90:
				return DOMCoordToCell(this.position);
			case 180:
				return DOMCoordToCell(this.position);
			case 270:
				return DOMCoordToCell({
					left: this.position.left + CELLSIZE * 2,
					top: this.position.top
				});
		}
	}
	getCells():Cell[] {
		return [];
	}
}
