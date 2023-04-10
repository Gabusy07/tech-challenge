import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addNameToStorage( name : string ){
    localStorage.setItem("name", name)
  }

  getName():any{
    let name = localStorage.getItem("name")
    return name;
  }
}
