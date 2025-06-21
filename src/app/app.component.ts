import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomePageComponent } from './home-page/home-page.component';
import { SobreComponent } from './sobre/sobre.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ContatoComponent } from './contato/contato.component';
import { SuporteComponent } from './suporte/suporte.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, HomePageComponent, SobreComponent, CreateAccountComponent, ContatoComponent, SuporteComponent, ProfileComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-project';
}
