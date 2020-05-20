import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class loginService{
  return: string = '';
  isLoggedIn: boolean = false;
  userDetail:any = '';
  public redirectUrl: string;
  private UserInfo = new Subject();
  UserInfo$ = this.UserInfo.asObservable();
  constructor(private configService: ConfigService, private router: Router, private route: ActivatedRoute) { }
   checkLoginData(){
       if(localStorage.getItem('userDetail')){
        this.isLoggedIn = true;
        this.UserInfo.next(this.isLoggedIn);
        this.router.navigate([this.redirectUrl]);
       }
     }
    SendData(loginData) {
      this.configService.getRequest('admin').subscribe((data:any[])=>{
          for(var i =0; i < data.length; i++){
            if(data[i].email === loginData.email && data[i].password === loginData.password){
              this.isLoggedIn = true;
                this.userDetail ={name:loginData.email, password:loginData.password};
                localStorage.setItem('userDetail', JSON.stringify(this.userDetail));
                this.UserInfo.next(this.isLoggedIn);
                this.router.navigate(['/user']);
                this.redirectUrl = null;
                return;
            }
            else {
              alert('Kindly enter valid credentials');
            }
          }
      });
    }
}