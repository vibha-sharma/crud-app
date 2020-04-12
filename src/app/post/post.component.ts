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
		this.getData();
	}
    // Delete Row 
	deleteRow (getid) {
		this.configService.deleteRequest('posts/', getid).subscribe((data:any[])=>{
			this.getData();
	  	});
	}
	getData(){
		this.configService.getRequest('posts').subscribe((data:any[])=>{
	  		this.postData = data;
	  	});
	}
}
