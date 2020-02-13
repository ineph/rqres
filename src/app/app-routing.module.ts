import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginRegistrarComponent } from './login-registrar/login-registrar.component';


const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'usuario/:id',
    component: UsuarioComponent
  },
  {
    path: 'novo-usuario',
    component: CriarUsuarioComponent
  },
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginRegistrarComponent
  },
  {
    path: 'registrar',
    component: LoginRegistrarComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
