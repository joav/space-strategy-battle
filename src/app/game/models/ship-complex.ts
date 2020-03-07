import { ShipBase } from './ship-base';
import { Ship } from './ship';
import { Cell } from './cell';
import { CELLSIZE } from '../constants';
import { DOMCoordToCell } from '../functions';

export class ShipComplex extends ShipBase implements Ship {
	canRotate(){
		const primaryCell = this.getPrimaryCell();
		if(
			(this.orientation == 0   && (9 - primaryCell.column) < (this.parts - 1)) ||
			(this.orientation == 90  && (9 - primaryCell.row)    < (this.parts - 1)) ||
			(this.orientation == 180 && primaryCell.column       < (this.parts - 1)) ||
			(this.orientation == 270 && primaryCell.row          < (this.parts - 1))
		){
			return false;
		}
		return true;
	}
	getPrimaryCell():Cell {
		switch(this.orientation){
			case 0:
				return DOMCoordToCell({
					left: this.position.left,
					top: this.position.top + CELLSIZE * (this.parts - 1)
				});
			case 90:
				return DOMCoordToCell(this.position);
			case 180:
				return DOMCoordToCell(this.position);
			case 270:
				return DOMCoordToCell({
					left: this.position.left + CELLSIZE * (this.parts - 1),
					top: this.position.top
				});
		}
	}
	getCells():Cell[]{
		const primaryCell = this.getPrimaryCell();
		const cells = [primaryCell];
		for(let i = 1; i < this.parts; i++){
			switch (this.orientation) {
				case 0:
					cells.push({
						column: primaryCell.column,
						row: primaryCell.row - i
					});
					break;
				case 90:
					cells.push({
						column: primaryCell.column + i,
						row: primaryCell.row
					});
					break;
				case 180:
					cells.push({
						column: primaryCell.column,
						row: primaryCell.row + i
					});
					break;
				case 270:
					cells.push({
						column: primaryCell.column - i,
						row: primaryCell.row
					});
					break;
			}
		}
		return cells;
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
