import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import BASE_URL from './constant';
@Injectable()

export class ConfigService {
  constructor(private http: HttpClient) { }
  handleError(error:HttpErrorResponse){
  	let errorMessage = "Connect to DB json!!";
  	errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  	return throwError(errorMessage);
  }
  public getRequest(api:any) {
  	return this.http.get(BASE_URL +api).pipe(retry(3), catchError(this.handleError));
  }
  public deleteRequest(api:any, id:any){
    return this.http.delete(BASE_URL + api + id);
  }
  public putRequest(api:any, id:any, data:any){
     return this.http.put(BASE_URL + api + id, data);
  }
  public postRequest(api:any, data:any){
    return this.http.post(BASE_URL + api, data);
  }
}