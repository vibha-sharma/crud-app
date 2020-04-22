import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    constructor(private configService: ConfigService) { }
    postData: any = "";
    headers = ['#', 'Title', 'Content', 'Actions']
    pageheading = "Post Section!";
    @Output() deleteEventFromModel = new EventEmitter<any>();
	ngOnInit(): void {
		this.getData();
	}
    // Delete Row 
	deleteRowData(getId){
	    this.deleteEventFromModel.emit(getId);
	}
	getData(){
		this.configService.getRequest('posts').subscribe((data:any[])=>{
	  		this.postData = data;
	  	});
	}
}
