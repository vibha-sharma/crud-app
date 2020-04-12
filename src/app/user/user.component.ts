import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    constructor(private configService: ConfigService) { }
    profileData: any = "";
    headers = ['Id', 'Name/Username', 'Email', 'Phone','Actions'];
    pageheading = "User Section!";
	ngOnInit(): void {
		this.getData();
	}
	// Delete Row 
	deleteUserRow (getid) {
		this.configService.deleteRequest('profiles/', getid).subscribe((data:any[])=>{
			this.getData();
	  	});
	}
	// Get user data
	getData(){
		this.configService.getRequest('profiles').subscribe((data:any[])=>{
		  	this.profileData = data;
		});	
	};
	updateData (getData){
		console.log('getData', getData);
		// this.configService.putRequest('profiles/' + getData.id + '/', getData).subscribe((data:any[])=>{
	 //   	    this.getData();
		// });
	}
}