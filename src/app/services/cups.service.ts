import { Injectable } from '@angular/core';
import { Cup, cupsMock } from '../models/cup';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CupsService {
	private _cups:Cup[] = cupsMock;
	cups() {
		return of(this._cups);
	}
}
