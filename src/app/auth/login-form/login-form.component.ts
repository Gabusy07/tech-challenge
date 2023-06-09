import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { ChangeFormService } from 'src/app/service/change-form.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  public form:FormGroup

  constructor(private readonly formBuilder : FormBuilder,
    private userService: UserService, private route: Router, private storage : LocalStorageService
    ) {

    this.form = this.initForm();
    
   }

  ngOnInit(): void {
    
  }

  goToRegister() {
    this.route.navigate(['/register']);
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



  send() {
    const user:User = this.form.value;
    let u = new User();
    let password:String = "";

    u.name = user.name;
    u.email = user.email;
    u.password = user.password;
    if (this.form.valid) {
      this.userService.getUser(u.email).subscribe({
        next: data=> {
          password = data.password
          this.storage.addNameToStorage(data.name.valueOf())
        },
      
        complete: () => {
          if(u.password == password){
            this.route.navigate(['/home'])
            
          }
          else{
            alert("contraseña incorrecta")
          }
        }
        
      })
    }
  }

  
}


