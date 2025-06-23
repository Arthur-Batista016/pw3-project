import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SobreComponent } from "../sobre/sobre.component";
import { ContatoComponent } from "../contato/contato.component";

@Component({
  selector: 'app-home-page',
  imports: [SobreComponent, ContatoComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private router:Router) {}

  alterarConta(){
    this.router.navigate(['/'])
  }

  profile(){
    this.router.navigate(['/profile'])
  }

}
