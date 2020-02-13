import { Component, OnInit } from '@angular/core';
import { IdiomaService } from '../../services/idioma.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  idiomaCorrente = true;
  eng = ['Register'];
  por = ['Registrar-se'];

  constructor(public idiomaService: IdiomaService) {
    idiomaService.idioma.subscribe(res => this.idiomaCorrente = res);
  }

  ngOnInit() {
  }

  mudaIdioma(ligaDesliga: boolean) {
    this.idiomaService.idioma.next(ligaDesliga);
    console.log(this.idiomaCorrente);
  }
}
