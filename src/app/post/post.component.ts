import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    constructor(private configService: ConfigService, private eventService: EventService) { }
    postData: any = "";
    headers = ['#', 'Title', 'Content', 'Actions']
    pageheading = "Post Section!";
    showSpinner: any = true;
    getCount: any;
    //public count: number = 10;
    @Output() deleteEventFromModel = new EventEmitter<any>();
    @Output() checkCountEvent = new EventEmitter<any>();
	ngOnInit(): void {
		this.getData();
		console.log('PostComponent',this.eventService.IncreaseCount2());
	}
    // Delete Row 
	deleteRowData(getId){
	    this.deleteEventFromModel.emit(getId);
	}
	getData(){
		this.configService.getRequest('posts').subscribe((data:any[])=>{
	  		this.postData = data;
	  		this.showSpinner= false;
	  	});
	}
	checkCount(){
		this.getCount = this.eventService.IncreaseCount2();
		console.log('this.getCount', this.getCount);
	}
}
