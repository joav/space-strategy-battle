import { Component, OnInit } from '@angular/core';
import { CupsService } from '../services/cups.service';
import { Cup } from '../models/cup';


@Component({
	selector: 'app-cups',
	templateUrl: './cups.component.html',
	styleUrls: ['./cups.component.scss']
})
export class CupsComponent implements OnInit {
	cups:Cup[] = [];
	constructor(cupsServ:CupsService) {
		cupsServ.cups().subscribe(c => this.cups = c);
	}

	ngOnInit(): void {

	}
}
