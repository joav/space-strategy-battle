import { ShipBase } from './ship-base';
import { Cell } from './cell';

export interface Ship extends ShipBase {
	canRotate():boolean;
	getCells():Cell[];
	getPrimaryCell():Cell;
}
