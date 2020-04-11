import { Component, OnInit } from '@angular/core';
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
	ngOnInit(): void {
	  	this.configService.getRequest('posts').subscribe((data:any[])=>{
	  		console.log('data', data);
	  		this.postData = data;
	  	});
	}
}
