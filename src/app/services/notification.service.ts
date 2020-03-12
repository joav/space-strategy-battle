import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: "root"
})
export class NotificationService {
	private _notifications:string[] = ['abcd','efgh'];
	total(){
		return new Observable<number>(s => {
			s.next(this._notifications.length);
		});
	}
	notifications() {
		return of(this._notifications);
	}
}
