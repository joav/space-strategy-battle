import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CellState } from '../models/cell';

@Component({
	selector: 'game-cell',
	templateUrl: './cell.component.html',
	styleUrls: ['./cell.component.scss']
})
export class CellComponent {
	@Input() state:CellState = 'inactive';

	@Output() select = new EventEmitter<any>();
	constructor() { }
	get valid() {
		return this.state == 'valid';
	}
	get fail() {
		return this.state == 'fail';
	}
}
