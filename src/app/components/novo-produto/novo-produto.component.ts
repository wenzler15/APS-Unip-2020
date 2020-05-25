import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Produtos } from "src/app/models/Produtos";

@Component({
  selector: "app-novo-produto",
  templateUrl: "./novo-produto.component.html",
  styleUrls: ["./novo-produto.component.css"]
})
export class NovoProdutoComponent implements OnInit {
  public lista: any[] = [];

  formProduto: FormGroup;

  createForm(produto: Produtos) {
    this.formProduto = new FormGroup({
      cod: new FormControl(produto.cod),
      desc: new FormControl(produto.descricao),
      regAnvisa: new FormControl(produto.regAnvisa)
    });
  }
  constructor() {
    this.lista.push(new Produtos());
  }

  ngOnInit(): void {
    this.createForm(new Produtos());
  }

  enviarProduto() {
    console.log(this.formProduto);
  }
}
