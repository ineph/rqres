import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IdiomaService {

  idioma = new Subject<boolean>();

}
