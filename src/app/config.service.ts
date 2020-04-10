import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  API_SERVICE = 'http://localhost:3000/';
  handleError(error:HttpErrorResponse){
  	let errorMessage = "Connect to DB json!!";
  	// if(error.error = instanceof ErrorEvent){
  	// 	errorMessage = `Error: ${error.error.message}`;
  	// }
  	errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  	return throwError(errorMessage);

  }
  public getRequest(api:any) {
  	return this.http.get(this.API_SERVICE +api).pipe(retry(3), catchError(this.handleError));
  }
}