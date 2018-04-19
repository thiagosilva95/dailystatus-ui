import { Build } from './build';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class BuildService {

  buildsUrl = 'http://localhost:8080/builds';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(`${this.buildsUrl}?resumo`,
        { headers })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const builds = responseJson.content;

        const resultado = {
          builds,
          total: responseJson.totalElements
        };

        return resultado;
      });
  }

  adicionar(build: Build): Promise<Build> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.buildsUrl,
        JSON.stringify(build), { headers })
      .toPromise()
      .then(response => response.json());
  }

  atualizar(lancamento: Build): Promise<Build> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.buildsUrl}/${lancamento.codigo}`,
        JSON.stringify(lancamento), { headers })
      .toPromise()
      .then(response => {
        const lancamentoAlterado = response.json() as Build;

        return lancamentoAlterado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Build> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(`${this.buildsUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const lancamento = response.json() as Build;

        return lancamento;
      });
  }

  excluir(codigo: number): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete(`${this.buildsUrl}/${codigo}`, {headers})
      .toPromise()
      .then(() => null);
  }

}

