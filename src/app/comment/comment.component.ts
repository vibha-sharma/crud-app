import { Component, OnInit } from '@angular/core';
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
	ngOnInit(): void {
		this.getData();
	}
	// Delete Row 
	deleteRow (getid) {
		this.configService.deleteRequest('comments/', getid).subscribe((data:any[])=>{
			this.getData();
	  	});
	}
	getData(){
		this.configService.getRequest('comments').subscribe((data:any[])=>{
	  		this.commentData = data;
	  	});
	}
}
