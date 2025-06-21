import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  form:FormGroup

  constructor(private fb:FormBuilder, private router:Router) {
      this.form = this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required]       
      });
  }

  

  user:string = "Tadeu"
  senha:string = "1313"

  
  aparecer:boolean = true
  aparecer2:boolean = true

  aparecerInput(){
    this.aparecer = false
  }

  aparecerInput2(){
    this.aparecer2 = false
  }


  alterarPerfil(formGroup:AbstractControl){
    if(formGroup.get('username')?.touched){
      this.user = formGroup.get('username')?.value
      this.aparecer = true
    }
  }

  alterarSenha(formGroup:AbstractControl){
    if(formGroup.get('password')?.touched){
      this.senha = formGroup.get('password')?.value
      this.aparecer2 = true
    }
  }

  voltar(){
    this.router.navigate(['/home'])
  }
}
