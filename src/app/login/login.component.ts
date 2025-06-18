import { Component } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',

})
export class LoginComponent {

  user:string = 'tadeu';
  password:number = 1313;


  form: FormGroup;
 


  constructor(private fb:FormBuilder, private router:Router) {
      this.form = this.fb.group({
        username:['',Validators.required],
        passwords: this.fb.group({
          password:['',Validators.required],
          confirmPassword:['',Validators.required]
        },
        {validators: this.mesmasenhaValidator})
      });
  }




  cadastrar(){
    if(this.form.valid){
      alert("Login Efetuado com sucesso!")
      this.router.navigate(['/home'])
    }else{
      alert("Login Falhou !")
    }
  }

    mesmasenhaValidator:ValidatorFn = (formGroup:AbstractControl):ValidationErrors | null =>{
    let senha = formGroup.get('password')?.value;
    let confirmarSenha = formGroup.get('confirmPassword')?.value;

    if(senha !== confirmarSenha){
      return {senhasDiferentes:true}
    }

     return null;

  }

}
// verifyLogin:ValidatorFn = (FormGroup:AbstractControl):ValidationErrors | null =>{
  //   let username = this.form.get('username')?.value
  //   let pass = this.form.get('passwords')?.get("password")?.value
  //   if(this.user!=username && this.password != pass){
  //     return {loginFailed:true}
  //   }