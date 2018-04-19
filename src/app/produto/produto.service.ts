import { Produto } from './produto.model';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ProdutoService {

  produtosUrl = 'http://localhost:8080/produtos';

  constructor(private http: Http) { }

  adicionar(produto: Produto): Promise<Produto> {
    produto.snAtivo = 'S';
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.produtosUrl,
        JSON.stringify(produto), { headers })
      .toPromise()
      .then(response => response.json());
  }


}
