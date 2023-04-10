import { Component } from '@angular/core';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { User } from 'src/app/model/User';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private readonly storageService : LocalStorageService, ){
    
  }

  ngOnInit(): void {
   
  }

  getUserNameFromStorage(): void{
    this.storageService.getName()
    
  }

  userName:string = ""

}
