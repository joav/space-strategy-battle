import { ShipType } from './ship-base';
import { Ship } from './ship';
import { Miner } from './miner';
import { DOMCoord } from './dom-coord';
import { Explorer } from './explorer';

export class ShipFactory {
	static create(type:ShipType, position:DOMCoord, orientation = 0): Ship{
		switch(type){
			case '1':
				return new Miner(position, orientation);
			case '2':
				return new Explorer(position, orientation);
		}
	}
}
