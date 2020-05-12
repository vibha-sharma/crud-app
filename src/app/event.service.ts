import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

//import { BellNotificationComponent } from '././bell-notification/bell-notification.component';

@Injectable()
export class EventService {
	IncreaseCount$: Observable<any>;
   // private myMethodSubject = new BehaviorSubject<any>("");	
	count: any;
	constructor(){
		//this.IncreaseCount$ = this.myMethodSubject.asObservable();
	}
	IncreaseCount(data) {
        console.log('insideService', data); 
        //this.myMethodSubject.next(data);
        this.count = data;
    }
    IncreaseCount2(){
        return this.count = this.count + 1;
    }
}
