import { DOMCoord } from './dom-coord';

export class ShipBase {
	constructor(public parts:number, public type:ShipType, public position:DOMCoord, public orientation = 0) { }

	rotate() {
		this.orientation = (this.orientation + 90) % 360;
	}
}

export type ShipType = '1'|'2'|'3'|'4';
