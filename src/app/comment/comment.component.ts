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
	ngOnInit(): void {
	  	this.configService.getRequest('comments').subscribe((data:any[])=>{
	  		console.log('data', data);
	  		this.commentData = data;
	  	});
	}

}
