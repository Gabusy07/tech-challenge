import { Component } from '@angular/core';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private readonly userService : UserService){
    
  }

  ngOnInit(): void {
   
  }

  initUser(): void{
    this.userService.getUser("").subscribe({
      next : data => this.user = data
    }

    )
  }

  user!:User

}
