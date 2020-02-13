import { Component, OnInit } from '@angular/core';
import { MasterService } from '../shared/services/master.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../shared/modal/usuario';
import { UsuarioPost } from '../shared/modal/usuario-post';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent implements OnInit {

  usuario = new Usuario();
  editando = false;
  inputNomeUsuario = '';
  inputCargoUsuario = '';
  respostaPut: any;

  constructor(
    private mestre: MasterService,
    private rota: ActivatedRoute)
    
    {
      this.rota.params.subscribe(rota => {
        this.mestre.getUsuario(rota.id).subscribe(usuario => {         
          this.usuario = usuario.data;
          console.log(usuario)          
        });
      });
     }

  ngOnInit() { 
  }

  habilitarEdicao() {
    this.editando = true
    this.respostaPut = undefined;
  }

  submit() {
    const corpoUsuario = new UsuarioPost();

    corpoUsuario.job = this.inputCargoUsuario;
    corpoUsuario.name = this.inputNomeUsuario;

    this.mestre.putUsuario(this.usuario.id,corpoUsuario).subscribe(resposta => {
      console.log(resposta);
      this.respostaPut = resposta;
      this.editando = false;
    })

  }

}
