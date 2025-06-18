import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  imports: [ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  user:string = '';
  password:string = '' ;
  confirmarSenha:string = this.password;
  

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

  CriarConta(formGroup:AbstractControl){
    this.user = formGroup.get("username")?.value;
    this.password = formGroup.get("passwords")?.get("password")?.value;
    alert("Conta criada com Sucesso"); 
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
