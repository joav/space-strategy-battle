import { ShipType } from './ship-base';
import { Ship } from './ship';
import { Miner } from './miner';
import { DOMCoord } from './dom-coord';
import { Explorer } from './explorer';
import { AssaultShip } from './assault-ship';

export class ShipFactory {
	static create(type:ShipType, position:DOMCoord, orientation = 0): Ship{
		switch(type){
			case '1':
				return new Miner(position, orientation);
			case '2':
				return new Explorer(position, orientation);
			case '3':
				return new AssaultShip(position, orientation);
		}
	}
}
