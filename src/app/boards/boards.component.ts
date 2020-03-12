import { Component, OnInit } from '@angular/core';

import { boards } from "../models/board";

@Component({
	selector: 'app-boards',
	templateUrl: './boards.component.html',
	styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
	boards = boards;
	constructor() { }

	ngOnInit(): void { }
}
