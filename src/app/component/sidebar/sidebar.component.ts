import { Component } from '@angular/core';
import { SidebarOption } from 'src/app/model/SidebarOption';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  options:SidebarOption[] = [];

  constructor(private readonly sidebarService: SidebarService){
  }

  ngOnInit(){
    this.chargeOptions();
  }

  chargeOptions():void{
    this.sidebarService.getAll().subscribe({
      next: data => this.options = data,
    }
    )
  };


}
