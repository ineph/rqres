import { Component, OnInit } from '@angular/core';
import { MasterService } from '../shared/services/master.service';
import { UsuarioPost } from '../shared/modal/usuario-post';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss']
})
export class CriarUsuarioComponent implements OnInit {

  inputNomeUsuario = '';
  inputCargoUsuario = '';

  constructor(private mestre: MasterService) { }

  ngOnInit() {
  }

  criarUsuario() {
    const corpoUsuario = new UsuarioPost();
    corpoUsuario.job = this.inputCargoUsuario;
    corpoUsuario.name = this.inputNomeUsuario;

    this.mestre.postUsuario(corpoUsuario).subscribe(resposta => console.log(resposta)
    );
  }

}
