import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    constructor(private configService: ConfigService) { }
    commentData: any = "";
    headers = ['#', 'Name', 'Email', 'Content', 'Actions'];
    pageheading = "Comment Section!";
    @Output() deleteEventFromModel = new EventEmitter<any>();
	ngOnInit(): void {
		this.getData();
	}
	// Delete Row 
	deleteRowData(getId){
	    this.deleteEventFromModel.emit(getId);
	}
	getData(){
		this.configService.getRequest('comments').subscribe((data:any[])=>{
	  		this.commentData = data;
	  	});
	}
}
