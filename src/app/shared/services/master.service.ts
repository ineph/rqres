import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Paginacao } from '../modal/usuarios-paginacao';
import { Usuario } from '../modal/usuario';

@Injectable({providedIn: 'root'})
export class MasterService {

    constructor(private http: HttpClient) {}

    cuidaErro(erro: HttpErrorResponse) {
        // return erro.headers;
        return throwError('"erro tratado no master.service"');
    }

    getUsuarios(pagina: number) {
        return this.http.get<Paginacao<Usuario>>(`${environment.apiUrl}users?page=${pagina}`);
    }

    getUsuario(idUsuario: number) {
        return this.http.get<any>(`${environment.apiUrl}users/${idUsuario}`);
    }

    postUsuario(corpoUsuario: any) {
        return this.http.post(`${environment.apiUrl}users`, corpoUsuario);
    }

    putUsuario(idUsuario: number, corpoUsuario: any) {
        return this.http.put(`${environment.apiUrl}users/${idUsuario}`, corpoUsuario);
    }

    deleteUsuario(idUsuario: number) {
        return this.http.delete(`${environment.apiUrl}users/${idUsuario}`);
    }

    loginRegister(action: string, corpoSubmit) {
        return this.http.post(`${environment.apiUrl}${action}`, corpoSubmit)
            .pipe(catchError(this.cuidaErro));

    }

}
