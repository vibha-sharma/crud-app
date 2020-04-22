import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    userDetail: any;
    headers = ['Id', 'Name/Username', 'Email', 'Phone','Actions'];
    showUserdata: any = "";
    href: any = ""
    id: any = ""
  //  @Output() sendIdEvent = new EventEmitter<any>();
    constructor(private configService: ConfigService, private router: Router,
    	private route: ActivatedRoute) { }
    
    ngOnInit(): void {
    this.href = this.router.url;
		this.id = this.route.snapshot.paramMap.get('id');
		console.log('id', this.route);
		console.log('this.router', this.router);
		if(this.id){
			this.getUserDetail(this.id);
		}
    }
	getUserDetail(getUserId){
		this.configService.getRequest('profiles/' + getUserId).subscribe((data:any[])=>{
		    this.showUserdata = data;
		});
	}
	getUserInfoData (dataId){
        console.log('dataId', dataId);
	}
}
