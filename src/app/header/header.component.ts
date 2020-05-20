import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service';
import { loginService } from '../login/login-service';
import { Subscription }   from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() showInTableFromModal = new EventEmitter<any>();
  checkLoggedin: any;
  subscription: Subscription
  constructor(private configService: ConfigService, private loginService: loginService, private router: Router) {
     this.subscription = this.loginService.UserInfo$.subscribe(val=>{
        if(val){
          this.checkLoggedin = val;
        }
      })
  }

	ngOnInit(): void {
	}
  createNewuser(getUserData){
      this.showInTableFromModal.emit(getUserData);
	}
  signOut(){
    localStorage.removeItem('userDetail');
    this.loginService.isLoggedIn = false;
    this.router.navigate(['/login']);
    this.checkLoggedin = false;
  }
}
