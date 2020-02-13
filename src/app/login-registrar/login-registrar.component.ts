import { Component, OnInit } from '@angular/core';
import { MasterService } from '../shared/services/master.service';
import { UsuarioLoginRegistro } from '../shared/modal/usuario-registro';
import { ActivatedRoute } from '@angular/router';
import { IdiomaService } from '../shared/services/idioma.service';

@Component({
  selector: 'app-login-registrar',
  templateUrl: './login-registrar.component.html',
  styleUrls: ['./login-registrar.component.scss']
})
export class LoginRegistrarComponent implements OnInit {

  email = '';
  senha = '';
  rotaAtiva = '';
  idiomaAtual = true;
  por = [
    'Home',
    'Registrar-se',
    'e-mail',
    'senha',
    'Confirmar'
  ];
  eng = [
    'Home',
    'Register',
    'e-mail',
    'password',
    'Confirm'
  ];

  constructor(
    private mestreService: MasterService,
    private rota: ActivatedRoute,
    private idiomaService: IdiomaService
  ) {
    this.rota.url
      .subscribe(res => res.forEach(indiceRotaAtiva => this.rotaAtiva = indiceRotaAtiva.path));

    this.idiomaService.idioma.subscribe(idioma => this.idiomaAtual = idioma);
    console.log(this.idiomaAtual);
    }

  ngOnInit() {
  }

  onSubmit() {
    const corpoAction = new UsuarioLoginRegistro();
    corpoAction.email = this.email;
    corpoAction.password = this.senha;
    this.mestreService
      .loginRegister(this.rotaAtiva === 'registrar' ? 'register' : 'login', corpoAction)
      .subscribe(resposta => {
        console.log('sucesso de gay: ', resposta);

      },
      erro => console.log('erro de gay: ', erro)

      );
  }

}
