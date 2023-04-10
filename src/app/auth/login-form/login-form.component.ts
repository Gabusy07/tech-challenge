import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { ChangeFormService } from 'src/app/service/change-form.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  public form:FormGroup

  constructor(private readonly formBuilder : FormBuilder, private changeFormService : ChangeFormService,
    private userService: UserService
    ) {

    this.form = this.initForm();
    this.change = this.changeFormService.getData()
    
   }

  ngOnInit(): void {
    
  }

  //construccion del reactiveForm
  private initForm(): FormGroup{
    return this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(18)]],
    })

  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }


  changeForm(){
    this.changeFormService.change()
    
  }

  send() {
    const user:User = this.form.value;
    let u = new User();
    let userResponse: User;

    u.name = user.name;
    u.email = user.email;
    u.password = user.password;
    if (this.form.valid) {
      this.userService.getUser(u.email).subscribe({
        next: data=> userResponse.password = data.password,
        error: err => {
          console.log(err);
        },
        complete: () => {
          if(u.password == userResponse.password){
            

          }
          else{
            alert("contraseña incorrecta")
          }
        }
        
      })
    }
  }

  
  change: Boolean
}


