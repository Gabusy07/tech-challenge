import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { CreditCard } from '../model/CreditCard';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private request:HttpClient) { }

  getCreditCard(id:String):Observable<CreditCard>{
    return this.request.get<CreditCard>(this.url+id); 
  }

  private url = `${baseUrl}/api/credit-card/`;
}
