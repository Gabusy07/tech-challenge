import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../model/Transaction';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private request:HttpClient) { }


  getLastTransaction(cardId: String):Observable<Transaction>{
    return this.request.get<Transaction>(this.url+cardId); 
  }

  private url = `${baseUrl}/api/transaction/`;
}


