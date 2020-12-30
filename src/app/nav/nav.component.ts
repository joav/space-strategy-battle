import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	@Input() notifications = 0;

	@Output() logout = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

}
