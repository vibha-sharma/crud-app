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
    showSpinner: any = true;
    newArray: any = "";
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
			data.forEach(function(value, dataIndex){
              	var split = value.body.split(' ');
              	split.forEach(function(val, index){
					if(val.includes('gmail') || val.includes('yahoo') || val.includes('google')){
					   	val = '<a href="'+val+'">' + val +'</a>';
					   	split[index] = val;
					   	data[dataIndex].body = split.join(' ');
					}
				});
			})
	  		this.commentData = data;
	  		this.showSpinner = false;
	  	});
	}
}
