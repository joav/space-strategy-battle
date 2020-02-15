import { Injectable } from "@angular/core";
import { Cell, CellState } from './models/cell';
import { Observable, of } from 'rxjs';

@Injectable()
export class GameService {
	constructor() {

	}

	checkImpact(cell:Cell):Observable<CellState> {
		return of(Math.random() < 0.5?'fail':'valid');
	}
}
