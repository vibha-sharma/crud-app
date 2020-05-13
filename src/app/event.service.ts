import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class EventService {
    private count = new Subject();
    count$ = this.count.asObservable();
    checkCount: any = '';
	
	constructor(){
	}
	SendCount(data:number){
		this.checkCount = data;
	}
	IncreaseCount(data: number) {
		this.checkCount = this.checkCount + 1;
        this.count.next(this.checkCount);
		console.log('this.checkCount', this.checkCount);
    }
    sendToClickEvent(){
    	return this.checkCount;
    }
}