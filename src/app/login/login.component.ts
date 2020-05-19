import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from '../config.service';
import { loginService } from './login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginfrom:any = '';
   submitted = false;
  constructor(private loginService: loginService, private router: Router, private configService: ConfigService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
  	this.loginfrom = this.formBuilder.group({
      email:  ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  get validation(){
    return this.loginfrom.controls;
  }
  onSubmit(loginData) {
  	this.submitted = true;
  	if (this.loginfrom.valid) {
  		this.loginService.SendData(loginData);
    }
  }

}
