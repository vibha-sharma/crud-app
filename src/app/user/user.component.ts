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
	ngOnInit(): void {
	  	this.configService.getRequest('profiles').subscribe((data:any[])=>{
	  		console.log('data', data);
	  		this.profileData = data;
	  	});
	}
}