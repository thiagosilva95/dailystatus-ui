import { Produto } from './../produto.model';
import { ProdutoService } from './../produto.service';
import { ToastyService } from 'ng2-toasty';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../../error-handler.service';

@Component({
  selector: 'ds-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto = new Produto();

  constructor(private produtoService: ProdutoService,
              private toasty: ToastyService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    console.dir(form);

    this.produtoService.adicionar(this.produto)
      .then(() => {
        this.toasty.success('Produto salvo com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));

    form.reset();

    this.produto = new Produto();
  }

}
