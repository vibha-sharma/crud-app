import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-bell-notification',
  templateUrl: './bell-notification.component.html',
  styleUrls: ['./bell-notification.component.css']
})
export class BellNotificationComponent implements OnInit {
  event:any;
  countGet: any = 10;
  public count: number = 10;
  subscription: Subscription;
  constructor(private eventService:EventService) {
    this.subscription = this.eventService.count$.subscribe(val=>{
        console.log('val', val);
        this.countGet = val;
      })
   }

  ngOnInit(): void {
  	this.eventService.SendCount(this.count);
  }
}

