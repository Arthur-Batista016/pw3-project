import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SuporteComponent } from './suporte/suporte.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: '', component: LoginComponent, title: "login" },
    {path: 'home', component:HomePageComponent, 
        children: [
      { path: 'sobre', component: SobreComponent },
      { path: 'contato', component: ContatoComponent }
    ]},
    {path: 'suporte', component:SuporteComponent },
    {path: 'createAccount', component:CreateAccountComponent},
     {path: 'profile', component:ProfileComponent}
];
