import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';
  constructor(private configService: ConfigService) {}
    ngOnInit(): void {
    }
    showUserCreated(getUserData){
		  this.configService.postRequest('profiles', getUserData).subscribe((data:any[])=>{

	   });
	}
}