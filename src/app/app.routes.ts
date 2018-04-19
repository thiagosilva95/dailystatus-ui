import { ItemCadastroComponent } from './item/item-cadastro/item-cadastro.component';
import { BuildDetailComponent } from './build/build-detail/build-detail.component';
import { BuildCadastroComponent } from './build/build-cadastro/build-cadastro.component';
import { ProdutoCadastroComponent } from './produto/produto-cadastro/produto-cadastro.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro-produto', component: ProdutoCadastroComponent},
  {path: 'cadastro-build', component: BuildCadastroComponent},
  {path: 'build-detail', component: BuildDetailComponent},
  {path: 'cadastro-item', component: ItemCadastroComponent},
  {path: 'item-detail', component: ItemDetailComponent}
];
