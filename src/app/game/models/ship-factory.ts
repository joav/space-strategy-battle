import { ShipType } from './ship-base';
import { Ship } from './ship';
import { Miner } from './miner';
import { DOMCoord } from './dom-coord';
import { Explorer } from './explorer';
import { AssaultShip } from './assault-ship';
import { Mothership } from './mothership';

export class ShipFactory {
	static create(type:ShipType, position:DOMCoord, orientation = 0): Ship{
		switch(type){
			case 'miner':
				return new Miner(position, orientation);
			case 'explorer':
				return new Explorer(position, orientation);
			case 'assault':
				return new AssaultShip(position, orientation);
			case 'mothership':
				return new Mothership(position, orientation);
		}
	}
}
