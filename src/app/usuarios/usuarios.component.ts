import { Component, OnInit } from '@angular/core';
import { MasterService } from '../shared/services/master.service';
import { Paginacao } from '../shared/modal/usuarios-paginacao';
import { Usuario } from '../shared/modal/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  paginacaoUsuarios = new Paginacao<Usuario>();
  usuarioApagado = 0;

  constructor(private mestreService: MasterService) { }

  ngOnInit() {
    this.populaUsuario();
  }

  populaUsuario() {
    this.mestreService.getUsuarios(this.paginacaoUsuarios.page).subscribe(
      resposta => {
        Object.assign(this.paginacaoUsuarios, resposta);
        this.paginacaoUsuarios.data.forEach((usuario, index) =>
          usuario.cargo = `nível: ${index + 1}`
        );
        for (let i = 1; i <= resposta.total_pages; i++) {
          if (this.paginacaoUsuarios.paginas.length <= i - 1) {
            this.paginacaoUsuarios.paginas.push(i);
          }
        }
      },
      () => alert('falha')
    );
  }

  apagarUsuario(idUsuario: number) {
    this.mestreService.deleteUsuario(idUsuario).subscribe
    (resposta => { console.log('Sucesso!');
                   this.usuarioApagado = idUsuario; },
      resposta => console.log('Falha!')
    );
  }

  paginas(numeroPagina?: number) {
    this.paginacaoUsuarios.page = numeroPagina;
    this.populaUsuario();
  }


}
