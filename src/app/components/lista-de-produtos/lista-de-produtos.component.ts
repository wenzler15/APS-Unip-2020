import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/sevices/http.service';
import { Produtos } from 'src/app/models/Produtos';
import { Grupo } from 'src/app/models/Grupo';


@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {

  @Input() grupoAtivo: Grupo;
  public produtos: Produtos[] = [];
  public produtosExibidos: Produtos[] =[];
  constructor(private http: HttpService) {

    this.http.getProdutos().subscribe(
      (data) => { 
        this.produtos = data; 
        this.produtosExibidos = data;
      }
    );

  }


  listaDoGrupo(codDoGrupo:number){

    if(codDoGrupo !=0){
      this.produtosExibidos = this.produtos.filter(
      produto => (produto.codGrupo == codDoGrupo)
      )
  } else{ this.produtosExibidos = this.produtos;

      }
}

  listarDoGrupo(id:number){


  }


  ngOnInit(): void {
  }

}
