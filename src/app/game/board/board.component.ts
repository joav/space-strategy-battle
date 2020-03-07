import { Component, OnInit, ViewChild } from '@angular/core';
import { ShipBoardComponent } from '../ship-board/ship-board.component';

@Component({
	selector: 'game-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss']
})
export class BoardComponent {
	@ViewChild('shipBoard', {static: true}) shipBoard:ShipBoardComponent;
	constructor() { }
	ready(){
		const valid = this.shipBoard.validateBoard();
		alert(valid?'Listos':'Superpuestos');
	}
}
