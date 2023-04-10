import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private request:HttpClient) { }

  
  //metodos conexion con servidor crear, leer, loggear, eliminar, modificar
  createUser(u: User): Observable<object>{
    const headers = this.getheader();
    return this.request.post<User>(this.url, u, {headers});
  }



  getUser(username:String):Observable<User>{
    const headers = this.getheader();
    return this.request.get<User>(this.url+username); 
  }

  
  private getheader():HttpHeaders{
  
    const token:string = localStorage['token'];
    const headers= new HttpHeaders({
      'Content-Type':  'application/json'
    })
    return headers;
  }

  private url = `${baseUrl}/api/user/`;
}
