import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private USER_KEY = 'USER';

  constructor() { }

  public setUser( userData: string ){
    localStorage.setItem(this.USER_KEY, JSON.stringify(userData) );
  }

  public getUser(){
    return localStorage.getItem(this.USER_KEY);
  }

  public destroySession(){
    localStorage.clear();
  }

  public getToken(){
    try{
      const userObj = JSON.parse(this.getUser());
      return userObj.token;
    }catch(err){
      return '';
    }
  }

  public isLoggedIn(){
    return this.getToken() === '' ? false:true;
  }

  public getField(field: string){
    try{
      const userObj = JSON.parse(this.getUser());
      return userObj.user[field]
    }catch(err){
      return '';
    }
  }
}
