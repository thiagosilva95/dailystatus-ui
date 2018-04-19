import { ItemModule } from './item/item.module';
import { BuildModule } from './build/build.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ErrorHandlerService } from './error-handler.service';
import { FormsModule } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';

import { ROUTES  } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProdutoModule } from './produto/produto.module';
import { SegurancaModule } from './seguranca/seguranca.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ToastyModule.forRoot(),

    BuildModule,
    ProdutoModule,
    ItemModule,
    SegurancaModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    ErrorHandlerService,
    ToastyModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
