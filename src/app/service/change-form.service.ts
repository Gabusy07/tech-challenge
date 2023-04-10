import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeFormService {


  private changeClicked: Boolean = true;

  change() {
    this.changeClicked = !this.changeClicked;
  }

  getData() {
    return this.changeClicked;
  }
}
