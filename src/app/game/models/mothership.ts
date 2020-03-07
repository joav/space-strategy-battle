import { ShipComplex } from './ship-complex';
import { DOMCoord } from './dom-coord';
import { Cell } from './cell';

export class Mothership extends ShipComplex {
	constructor(position:DOMCoord, orientation = 0){
		super(4, 'mothership', position, orientation);
	}
}
