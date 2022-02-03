import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RnfiService {

  constructor(
    private http: HttpClient
  ) { }

  login(data:any) {
    return this.http.post<any>('https://paysprint.in/service-api/testangular/api/TestAngular/login', data);
  }

  otpVerification(data:any) {
    return this.http.post<any>('https://paysprint.in/service-api/testangular/api/TestAngular/verifyOtp', data);
  }

  getDynamicData(data:any) {
    // const httpHeaders = new HttpHeaders({
    //   "Authkey": "test-angular-2021"
    // });
    return this.http.post<any>('https://paysprint.in/service-api/testangular/api/TestAngular/getDynamicform', data);
  }

  updateDynamicData(data:any) {
    // const httpHeaders = new HttpHeaders({
    //   "Authkey": "test-angular-2021"
    // });
    return this.http.post<any>('https://paysprint.in/service-api/testangular/api/TestAngular/createDynamicform', data);
  }

  private _loggedUserDetail:any;
  get loggedUserDetail():any{
    return this._loggedUserDetail;
  }
  set loggedUserDetail(value:any){
    this._loggedUserDetail = value;
  }

}
