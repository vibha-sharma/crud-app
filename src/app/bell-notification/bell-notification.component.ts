import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-bell-notification',
  templateUrl: './bell-notification.component.html',
  styleUrls: ['./bell-notification.component.css']
})
export class BellNotificationComponent implements OnInit {
  event:any;
 // count : number = 10;
  public count: number = 50;
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
  	
  	//this.count = this.eventService.IncreaseCount();
  	console.log('bell-notification', this.count);
  	this.eventService.IncreaseCount(this.count);
  }
}