import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suporte',
  imports: [],
  templateUrl: './suporte.component.html',
  styleUrl: './suporte.component.css'
})
export class SuporteComponent {

  /**
   *
   */
  constructor(private router:Router) {}

  enviar(){
    alert("Mensagem enviada com Sucesso! Voltando a Página Inicial!");
    this.router.navigate(['/home'])
    
  }
}
