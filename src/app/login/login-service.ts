import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class loginService{
  return: string = '';
  isLoggedIn: boolean = false;
  public redirectUrl: string;
  constructor(private configService: ConfigService, private router: Router, private route: ActivatedRoute) { }
    SendData(loginData) {
      this.configService.getRequest('admin').subscribe((data:any[])=>{
        data.map((value) => {
          if(value.email === loginData.email && value.password === loginData.password){
            this.isLoggedIn = true;
            if (this.redirectUrl) {
              this.router.navigate([this.redirectUrl]);
              this.redirectUrl = null;
            }
            else {
              this.router.navigate(['/user']);
            }
          }
        });
      });
  }
}