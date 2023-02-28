import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private _loginUrl = "http://127.0.0.1:8000/api/login";
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'profanis_auth';
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }
  constructor(private http:HttpClient, private apiService: ApiService) {

    this._isLoggedIn$.next(!!this.token);
   }

   loginUser(username){
     return this.http.post<any>(this._loginUrl,username)
   }

  login(username: string, password: string) {
    return this.apiService.login(username, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.token);
      })
    );
  }
}
