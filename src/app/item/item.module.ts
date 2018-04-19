import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ROUTES } from '../app.routes';
import { ToastyModule } from 'ng2-toasty';
import { ItemService } from './item.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [ItemCadastroComponent, ItemDetailComponent],
  providers: [
    ItemService
  ]
})
export class ItemModule { }
