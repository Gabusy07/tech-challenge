import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserRequest } from 'src/app/model/userRequest';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  form!: FormGroup;

  constructor(private fb:FormBuilder,
     private userService: UserService, private readonly route: Router

    ){
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['']
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
    const user:UserRequest = this.form.value;
    let u = new UserRequest();

    u.name = user.name;
    u.email = user.email;
    u.password = user.password;
      this.userService.createUser(u).subscribe({
        next: ()=> {
          alert("usuario creado con exito");
          setTimeout(()=> this.route.navigate(["/home"]), 700)

        },
        error: err => alert("no se ha podido registrar el usuario")

        
      })
    
  }


  goToLogin() {
    this.route.navigate(['/login']);
  }

}
