import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { HomeComponent } from './components/home/home.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoComponent } from './components/produto/produto.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SobreComponent,
    ContatosComponent,
    HomeComponent,
    ListaDeProdutosComponent,
    GruposComponent,
    ProdutoComponent,
    NovoProdutoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
