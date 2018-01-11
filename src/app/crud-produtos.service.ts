import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Produto } from "./produto";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/RX";

@Injectable()
export class CrudProdutosService {
  produtos: Produto[] = [];
  uri = "http://localhost:8080/LojaVinhosWS/api/produtos";

autoIncrement:number = 1;

  constructor(private http: Http) { }
  getProdutos():Observable<Produto[]> {
    //return this.produtos;
    return this.http.get(this.uri)
    .map((res:Response)=>res.json())
    .catch((erro:any) => Observable.throw(erro));
  }

  adicionarProduto(produto:Produto):Observable<Produto>{
    let bodyString = JSON.stringify(produto);
    let cabecalho = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:cabecalho});
    return this.http.post(this.uri, bodyString, options)
      .map((res:Response) => {})
      .catch((erro:any) => Observable.throw(erro));
  }

  getProdutoPorCodigo(codigo:number):Observable<Produto>{
    return this.http.get(this.uri+"/"+codigo)
		.map((res:Response)=>res.json())		
		.catch((erro:any) => Observable.throw(erro));
  }

  private getProdutoUrl(codigo){
    return this.uri + "/" + codigo;
    }

  removerProduto(codigo){
      let bodyString = JSON.stringify(codigo);
      let headers = new Headers({'Content-Type':'application/json'})
      let options = new RequestOptions({headers:headers});
      return this.http.delete(this.getProdutoUrl(bodyString),options)
        .map(res => res.json())
        .catch((error:any)=>Observable.throw(error));
    }
  

  atualizaProduto(codigo:number, produto:Produto){
    let bodyString = JSON.stringify(produto);
	  let headers = new Headers({'Content-Type':'application/json'})
	 let options = new RequestOptions({headers:headers});
	 return this.http.put(this.getProdutoUrl(codigo),bodyString,options)
	   .map(res => res.json())
		 .catch((error:any)=>Observable.throw(error));
  }
}
