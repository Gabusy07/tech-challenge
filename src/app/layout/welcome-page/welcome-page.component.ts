import { Component } from '@angular/core';
import { ChangeFormService } from 'src/app/service/change-form.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
 

  constructor(private changeFormService : ChangeFormService){
    this.change = this.changeFormService.getData()
  }

  

  change:Boolean

}
