import { Component, OnInit, ViewChild } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { ListaDeProdutosComponent } from '../lista-de-produtos/lista-de-produtos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

@ViewChild('lista') lista: ListaDeProdutosComponent

  constructor() { }

  grupoAtivo: Grupo =null;

listarGrupo(grupo:Grupo){

  this.lista.listaDoGrupo(grupo.cod)
}

  ngOnInit(): void {
  }

}
