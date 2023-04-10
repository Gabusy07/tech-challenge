import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { ChangeFormService } from 'src/app/service/change-form.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  form!: FormGroup;

  constructor(private fb:FormBuilder, private changeFormService : ChangeFormService,
     private userService: UserService
    ){
    this.change = this.changeFormService.getData()
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(5), Validators.maxLength(18)]
    });
  }

  get Name(){
    return this.form.get('name');
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

    u.name = user.name;
    u.email = user.email;
    u.password = user.password;
    if (this.form.valid) {
      this.userService.createUser(u).subscribe({
        next: ()=> alert("usuario creado con exito"),
        error: err => alert(err)
        
      })
    }
  }

  changeForm(){
    this.changeFormService.change();
  }

  
  change: Boolean

}
