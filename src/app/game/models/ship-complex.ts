import { ShipBase } from './ship-base';
import { Ship } from './ship';
import { Cell } from './cell';

export class ShipComplex extends ShipBase implements Ship {
	canRotate(){
		const primaryCell = this.getPrimaryCell();
		if(
			(this.orientation == 0   && primaryCell.column == 9) ||
			(this.orientation == 90  && primaryCell.row    == 9) ||
			(this.orientation == 180 && primaryCell.column == 0) ||
			(this.orientation == 270 && primaryCell.row    == 0)
		){
			return false;
		}
		return true;
	}
	getPrimaryCell():Cell {
		return null;
	}
	getCells():Cell[]{
		return [];
	}
}
