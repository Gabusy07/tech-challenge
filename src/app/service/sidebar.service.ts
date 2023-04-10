import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SidebarOption } from '../model/SidebarOption';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private request:HttpClient) { }


  getAll():Observable<SidebarOption>{
    return this.request.get<SidebarOption>(this.url); 
  }

  private url = `${baseUrl}/api/menu`;
}
