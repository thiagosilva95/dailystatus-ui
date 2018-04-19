import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ROUTES } from '../app.routes';
import { ProdutosListComponent } from './produto-cadastro/produtos-list/produtos-list.component';
import { ProdutoService } from './produto.service';
import { ToastyModule } from 'ng2-toasty';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    ProdutoDetailComponent,
    ProdutoCadastroComponent,
    ProdutosListComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }
