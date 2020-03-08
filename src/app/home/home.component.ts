import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../player.service';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	playerName:FormControl = new FormControl('');

	player:Player;

	constructor(private playerServ:PlayerService) {
		playerServ.player.subscribe(player => {
			this.player = player;
			this.playerName.setValue(player.name);
		});
	}

	ngOnInit(): void { }

	savePlayer(){
		this.playerServ.saveName(this.playerName.value).subscribe(p => this.player = p);
	}
}
