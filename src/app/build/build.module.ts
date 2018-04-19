import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BuildCadastroComponent } from './build-cadastro/build-cadastro.component';
import { BuildDetailComponent } from './build-detail/build-detail.component';
import { ROUTES } from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [BuildCadastroComponent, BuildDetailComponent]
})
export class BuildModule { }
