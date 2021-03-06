import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
//import { ResponseContentType } from '@angular/http';
import {User} from '../user';


@Injectable()
export class UserService {
  private apiURL = 'http://localhost:3000/api/users';
  private updateUrl = 'http://localhost:3000/api/users/update';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  us: User;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    console.log()
    return this.http.get<User[]>(this.apiURL)
      .catch(this.handleError);
    // return of(USERS);   of(USERS) retorna un Observable<User[]>
    // q emite un single value, el array de users desde el body del HTTP response
  }

  register(user: User): Observable<User> {
    console.log('data: ', user);
    const url = `${this.apiURL}/signup`;
    console.log(url);
    console.log('headers', this.headers);
/*  this.us = new User();
    this.us.email = 'email13';
    this.us.name = 'name';
    this.us.token = 'token';
    this.us.password = 'password';
    this.us.birthday = new Date();
    this.us.city = 'city';
    this.us.imageProfile = null;
    this.us.orientation = 'both';
    this.us.sex = 'sex';*/

    console.log('this.user', user);

    return this.http.post<User>(url, user, {headers: this.headers})
      .catch(this.handleError) ;
  }
  login(user: User): Observable<User> {
    const url = `${this.apiURL}/signin`;
    console.log(url);
    console.log('headers', this.headers);
    console.log('this.user', user);
    return this.http.post<User>(url, user, {headers: this.headers})
      .catch(this.handleError);
  }
  profile(): Observable<User> {
    const url = `${this.apiURL}/profile`;
    console.log(url);
    console.log('headerProfile1:', this.headers);
    return this.http.get<User>(url, {headers: this.headers})
      .map(res => {
        console.log('headerProfile2:' , this.headers);
        return res;
      })
      .catch(this.handleError);
  }


  filter(showme): Observable<User> {
    console.log(showme);
    const url = `${this.apiURL}/filter`;
    console.log(url);
    console.log('headerProfile1:', this.headers);
    return this.http.post<User>(url, {orientation : showme.toString()}, {headers: this.headers})
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }
  updateName(user: User): Observable<User>{
    const url = `${this.updateUrl}/name/${user.name}`;
    console.log(url);
    return this.http.put(url, JSON.stringify(user), {headers: this.headers})
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }
  updateCity(user: User): Observable<User>{
    console.log(user);
    const url = `${this.updateUrl}/city/${user.city}`;
    console.log(url);
    return this.http.put(url, JSON.stringify(user), {headers: this.headers})
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  settings(username, city, pass1): Observable<User> {
    const url = `${this.apiURL}/settings`;
    console.log(url);
    console.log('headerProfile1:', this.headers);
    return this.http.post<User>(url, {username : username.toString(), city : city.toString(), pass1 : pass1.toString()}, {headers: this.headers})
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> { // errores del http
    console.error('An error occurred', error); // for demo purposes only
   return Promise.reject(error.message || error);

  }
}
