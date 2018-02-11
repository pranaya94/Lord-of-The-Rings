import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable()
export class UserService {
userURL: string = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userURL);
  }

  addUser(user: User): Observable<User>{
    const registerURL = `${this.userURL}/register`;
    return this.http.post<User>(registerURL,user,httpOptions);
  }
}
