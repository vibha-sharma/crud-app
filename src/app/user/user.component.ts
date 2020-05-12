import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	@Input() getUserInfo:any;
    constructor(private configService: ConfigService) { }
    profileData: any = "";
    headers = ['Id', 'Name/Username', 'Email', 'Phone','Actions'];
    pageheading = "User Section!";
    showSpinner: any = true;
    SendGetData = this.getData();
    config: any;
	ngOnInit(): void {
		this.getData();
		console.log('ss', this.SendGetData);
	}
	// Delete Row 
	deleteUserRow (getid) {
		this.configService.deleteRequest('profiles/', getid).subscribe((data:any[])=>{
			this.getData();
			$(".toast").toast({ delay: 5000 });
            $(".toast").toast('show');
	  	});
	}
	// Get user data
	getData(){
		this.configService.getRequest('profiles').subscribe((data:any[]) => {  
            this.profileData = data;
            this.showSpinner = false;
        });
	};
	updateData (getData){
		 this.configService.putRequest('profiles/', getData.id, getData).subscribe((data:any[])=>{
	    	this.getData();
		});
	}
	getMessage(message){
	    console.log('message', message);
	}
}