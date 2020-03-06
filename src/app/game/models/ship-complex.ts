import { ShipBase } from './ship-base';
import { Ship } from './ship';
import { Cell } from './cell';
import { CELLSIZE } from '../constants';

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
	shouldCorrectPos(){
		return this.orientation != 180;
	}
	correctPos(){
		let x = 0, y = 0;
		if(this.orientation == 0){
			[x,y] = [(Math.round(+this.position.left / CELLSIZE) * CELLSIZE) + (CELLSIZE * (this.parts - 1)), (Math.round(+this.position.top / CELLSIZE) * CELLSIZE) - (CELLSIZE * (this.parts - 1))];
		}
		if(this.orientation == 90){
			[x,y] = [Math.round(+this.position.left / CELLSIZE) * CELLSIZE, (Math.round(+this.position.top / CELLSIZE) * CELLSIZE) + (CELLSIZE * (this.parts - 1))];
		}
		if(this.orientation == 270){
			[x,y] = [(Math.round(+this.position.left / CELLSIZE) * CELLSIZE) - (CELLSIZE * (this.parts - 1)), (Math.round(+this.position.top / CELLSIZE) * CELLSIZE)];
		}
		return {x,y};
	}
}
