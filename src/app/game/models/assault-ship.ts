import { ShipComplex } from './ship-complex';
import { DOMCoord } from './dom-coord';
import { Cell } from './cell';
import { DOMCoordToCell } from '../functions';
import { CELLSIZE } from '../constants';

export class AssaultShip extends ShipComplex {
	constructor(position:DOMCoord, orientation = 0){
		super(3, 'assault', position, orientation);
	}
}
