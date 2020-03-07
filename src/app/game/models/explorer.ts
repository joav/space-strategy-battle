import { DOMCoord } from './dom-coord';
import { Cell } from './cell';
import { ShipComplex } from './ship-complex';
import { DOMCoordToCell } from '../functions';
import { CELLSIZE } from '../constants';

export class Explorer extends ShipComplex {
	constructor(position:DOMCoord, orientation = 0) {
		super(2, 'explorer', position, orientation);
	}
}
