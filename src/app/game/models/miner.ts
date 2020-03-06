import { Ship } from './ship';
import { ShipBase } from './ship-base';
import { DOMCoord } from './dom-coord';
import { Cell } from './cell';
import { DOMCoordToCell } from '../functions';

export class Miner extends ShipBase implements Ship {
	constructor(position:DOMCoord, orientation = 0){
		super(1, '1', position, orientation);
	}

	canRotate() {
		return true;
	}

	getPrimaryCell():Cell {
		return this.getCells()[0];
	}

	getCells():Cell[] {
		return [
			DOMCoordToCell(this.position)
		];
	}

	shouldCorrectPos(){
		return false;
	}
}
