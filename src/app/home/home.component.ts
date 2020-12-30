import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';
import { Player } from '../models/player';
import { PlayerService } from '../player.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	playerName:FormControl = new FormControl('', [Validators.required]);
	username:FormControl;
	password:FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
	repassword:FormControl = new FormControl('', [Validators.required, (ctrl: AbstractControl) => ctrl.value !== this.password.value?{equalTo: true}:null]);
	register = false;

	player:Player;

	constructor(private playerServ:PlayerService, private router:Router, public notifications:NotificationService) {
		playerServ.player.subscribe(player => {
			this.player = player;
			this.playerName.setValue(player.name);
		});
		this.username = new FormControl(
			'',
			[
				Validators.required,
				(ctrl: AbstractControl) => /^[a-z0-9_\.\-]+$/igm.test(ctrl.value)?null:{pattern: true}
			],
			[
				(ctrl: AbstractControl) => playerServ.checkUserName(ctrl.value).pipe(
					map(valid => valid || !this.register?null:{inUse: true})
				)
			]
		);
	}

	ngOnInit(): void { }

	savePlayer(){
		if(this.username.valid && this.password.valid){
			if(this.register && this.playerName.valid && this.repassword.valid){
				this.playerServ.createPlayer({
					name: this.playerName.value,
					username: this.username.value,
					password: this.password.value
				}).subscribe(player => {
					this.player = player;
				}, e => console.log('Error', e));
			}else{
				this.playerServ.checkPlayer({
					name: this.username.value,
					username: this.username.value,
					password: this.password.value
				}).subscribe(p => this.player = p);
			}
		}
	}

	logout(){
		this.playerServ.logout();
	}
}
