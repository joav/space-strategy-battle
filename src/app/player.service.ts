import { Injectable } from '@angular/core';
import { Player } from './models/player';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PlayerService {
	private _player:Player;
	constructor(){
		this._player = {
			name: 'Player #'+(Math.floor(Math.random() * 1000)),
			saved: false
		};
	}
	get player(){
		return of(this._player);
	}
	saveName(name:string){
		this._player.name = name;
		this._player.saved = true;
		return of(this._player);
	}
}
