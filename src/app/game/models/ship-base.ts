import { DOMCoord } from './dom-coord';

export class ShipBase {
	constructor(public parts:number, public type:ShipType, public position:DOMCoord, public orientation = 0) { }

	rotate() {
		this.orientation = (this.orientation + 90) % 360;
	}

	setPosition(pos:{x:number;y:number}){
		this.position.left = pos.x;
		this.position.top = pos.y;
	}

	correctPos() {
		return {x: 0, y:0};
	}
}

export type ShipType = 'miner'|'explorer'|'assault'|'mothership';
