import { Component } from '@angular/core';

import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private readonly storageService : LocalStorageService, ){
    
  }

  ngOnInit(): void {
    this.getUserNameFromStorage()
   
  }

  getUserNameFromStorage(): void{
    this.userName = this.storageService.getName();
    
  }

  userName:string = ""

}
