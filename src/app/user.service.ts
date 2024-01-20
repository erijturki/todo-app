import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , pipe} from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(login:string, password:string):Observable<User[]>{
    return this.httpClient.get<User[]>('http://localhost:3000/users').pipe(
    map(users=>users.filter(user=>user.login===login&&user.password===password))
    )
  }
}
