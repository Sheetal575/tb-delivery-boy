import { Profile } from './../models/profile.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  private headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8",
  });
  constructor(private http:HttpClient){

  }
  searchUserProfile(payload){
    console.log(payload);
    return this.http.post<Profile[]>('https://tbapi.truckbuddy.co.in/profile/search',
                       payload,
                       )
  }

  loginUser(credential){
    return this.http.post('https://tbapi.truckbuddy.co.in/login/search',credential)
  }
}
