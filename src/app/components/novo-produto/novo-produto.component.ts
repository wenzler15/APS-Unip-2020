import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import { Produtos } from 'src/app/models/Produtos';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  formProduto:FormGroup;

  constructor() { }

createForm(produto: Produtos){

  this.formProduto = new FormGroup({
  cod: new FormControl(produto.cod),
  desc: new FormControl(produto.descricao),
  regAnvisa: new FormControl(produto.regAnvisa),
  controlado: new FormControl(produto.controlado), 
  codGrupo: new FormControl(produto.codGrupo)

});
}

  ngOnInit(): void {
    this.createForm(new Produtos())
  }

  enviarProduto(){
    console.log(this.formProduto);
  }

}
