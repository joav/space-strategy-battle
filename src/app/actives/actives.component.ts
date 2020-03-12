import { Component, OnInit } from '@angular/core';
import { activesMock } from "../models/active-game";
import { NotificationService } from '../services/notification.service';

@Component({
	selector: 'app-actives',
	templateUrl: './actives.component.html',
	styleUrls: ['./actives.component.scss']
})
export class ActivesComponent implements OnInit {
	actives = activesMock;

	constructor(public notifications:NotificationService) {
		notifications.notifications().subscribe(n => {
			for (let i = 0; i < this.actives.length; i++) {
				this.actives[i].canPlay = n.includes(this.actives[i].id);
			}
		});
	}

	ngOnInit(): void { }
}
