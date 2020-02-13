import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginRegistrarComponent } from './login-registrar/login-registrar.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioComponent,
    CriarUsuarioComponent,
    NotFoundComponent,
    LoginRegistrarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
