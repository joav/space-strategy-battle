import { Injectable } from '@angular/core';
import { Player } from './models/player';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PlayerService {
	private _player:Player;
	constructor(private firestore: AngularFirestore, private auth: AngularFireAuth){
		this._player = {
			name: 'Player #'+(Math.floor(Math.random() * 1000)),
			saved: false
		};
	}

	get player(){
		return new Observable<Player>(subs => {
			this.auth.auth.onAuthStateChanged(user => {
				if(user){
					this.firestore.collection('players').doc(user.uid)
						.get()
						.subscribe(player => {
							this._player = {
								id: user.uid,
								name: player.get('name'),
								username: player.get('username'),
								saved: true
							};
							subs.next(this._player);
						}, e => {
							subs.next(this._player);
						});
				}else{
					subs.next(this._player);
				}
			})
		});
	}

	createPlayer(player: Player) {
		return new Observable<Player>(subs => {
			this._player.name = player.name;
			this._player.username = player.username;
			this.auth.auth.createUserWithEmailAndPassword(this.email(player), player.password)
				.then(r => {
					if(r){
						this.firestore.collection('players').doc(r.user.uid).set({
							name: player.name,
							username: player.username,
						}).then(() => {
							this.auth.auth.signInWithEmailAndPassword(this.email(player), player.password)
								.then(u => {
									this._player.saved = true;
									return this._player;
								})
								.catch(e => subs.error(e));
						})
						.catch(async e => {
							await r.user.delete();
							subs.error(e);
						})
					}
					else{
						subs.error(new Error('Create user error'));
					}
				})
				.catch(e => subs.error(e));
		});
	}

	saveName(name:string){
		this._player.name = name;
		this._player.saved = true;
		return of(this._player);
	}

	checkUserName(userName: string) {
		return this.firestore.collection('players', r => r
			.where('username', '==', userName))
			.get()
			.pipe(
				map(d => d.docs.length == 0)
			);
	}

	checkPlayer(player: Player) {
		return new Observable<Player>(subs => {
			this.auth.auth.signInWithEmailAndPassword(this.email(player), player.password)
				.then(user => {
					if(user){
						this.firestore.collection('players').doc(user.user.uid)
							.get()
							.subscribe(player => {
								this._player = {
									id: user.user.uid,
									name: player.get('name'),
									username: player.get('username'),
									saved: true
								};
								subs.next(this._player);
							}, e => {
								subs.next(this._player);
							});
					}else{
						subs.error('Player not exists');
					}
				})
				.catch(e => subs.error(e));
		});
	}

	email(player: Player) {
		return `${player.username}@space-strategy-battle.com`;
	}

	logout() {
		this._player.saved = false;
		this._player.name = 'Player #'+(Math.floor(Math.random() * 1000));
		this.auth.auth.signOut();
	}
}
