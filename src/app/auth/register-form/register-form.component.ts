import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  form!: FormGroup;

  constructor(private fb:FormBuilder){
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

  enviar() {
    if (this.form.valid) {
      // Procesar el formulario aquí
    }
  }

}
