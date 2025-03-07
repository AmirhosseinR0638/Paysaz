import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { LoginResponse } from './Models/ILoginResponse';
import { BehaviorSubject, delay, map, merge, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  router: Router = inject(Router);
  isLoggedIn: Subject<boolean> = new BehaviorSubject(false);
  isVIP: Subject<boolean> = new BehaviorSubject(false);
  private http = inject(HttpClient);
  private baseApiUrl: string = environment.BaseApiUrl;
  username: string;
  logIn(phoneNumber: string) {
    const requestBody = { phone_number: phoneNumber };
    return this.http
      .post<LoginResponse>(this.baseApiUrl + '/login', requestBody)
      .pipe(delay(1000));
  }
  getUserInfo() {
    return this.http.get(this.baseApiUrl + '/user').pipe(delay(1000));
  }
  getAddresses() {
    return this.http.get(this.baseApiUrl + '/addresses').pipe(delay(1000));
  }
  getCodes() {
    return this.http.get(this.baseApiUrl + '/code').pipe(delay(1000));
  }
  getCardStatus() {
    return this.http.get(this.baseApiUrl + '/carts/status').pipe(delay(1000));
  }
  getUserPurchases() {
    return this.http.get(this.baseApiUrl + '/purchases').pipe(delay(1000));
  }
  isUserLoggedIn() {
    if (localStorage.getItem('TK') == null) {
      return false;
    }
    return true;
  }
  LogOut() {
    this.isLoggedIn.next(false);
    localStorage.clear();
    this.router.navigateByUrl('log-in');
  }
}
