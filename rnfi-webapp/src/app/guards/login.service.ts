import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated(): boolean {
    return this.tokenNotExpired();
  }

  public logOut():void{
    localStorage.removeItem("authToken");
  }

  private tokenNotExpired() :boolean {
    let token = localStorage.getItem("authToken");
    if(!token){
      return false;
    }
    else{
      return true;
    }
  }

}
