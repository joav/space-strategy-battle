import { DOMCoord } from './dom-coord';
import { Cell } from './cell';
import { ShipComplex } from './ship-complex';
import { DOMCoordToCell } from '../functions';
import { CELLSIZE } from '../constants';

export class Explorer extends ShipComplex {
	constructor(position:DOMCoord, orientation = 0) {
		super(2, '2', position, orientation);
	}
	getPrimaryCell():Cell {
		switch(this.orientation){
			case 0:
				return DOMCoordToCell({
					left: this.position.left,
					top: this.position.top + CELLSIZE
				});
			case 90:
				return DOMCoordToCell(this.position);
			case 180:
				return DOMCoordToCell(this.position);
			case 270:
				return DOMCoordToCell({
					left: this.position.left + CELLSIZE,
					top: this.position.top
				});
		}
	}
	getCells():Cell[] {
		return [];
	}
}
