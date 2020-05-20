import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Grupo } from '../models/Grupo';
import { map } from "rxjs/operators"
import { Produtos } from '../models/Produtos';

const URL: string = "http://rdcrud.herokuapp.com";

function AdaptadorDeGrupo(data: any[]) {
  return data.map(
    (el) => { return new Grupo(el.COD_GRUPO, el.DESC) }
  )
}

function AdaptadorDeProdutos(data: any[]) {
  return data.map(
    (el) => { return new Produtos(el.COD_PRODUTO, el.DESC, el.REG_ANVISA, el.FL_CONTROLADO, el.COD_GRUPO )}
  )
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient) { }

  getGrupos() {
    let obs = this.http.get(URL + "/grupos");
    return obs.pipe(
      map(AdaptadorDeGrupo)
    )
  }

  getProdutos() {
    let obs = this.http.get(URL + "/produtos");
    return obs.pipe(
      map(AdaptadorDeProdutos)
    )
  }


}
