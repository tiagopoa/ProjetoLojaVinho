import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Venda } from "./venda";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/RX";

@Injectable()
export class CrudVendasService {
  venda: Venda[] = [];
  uri = "http://localhost:8080/LojaVinhos/api/vendas";
  //uri_vendas="http://www.mocky.io/v2/598b16861100004905515ec7";


  autoIncrement = 1;

  constructor(private http: Http) { }

  getVendas():Observable<Venda[]> {
    return this.http.get(this.uri)
    .map((res:Response)=>res.json())
    .catch((erro:any) => Observable.throw(erro));
    }
  
    adicionarVenda(venda:Venda):Observable<Venda>{
    let bodyString = JSON.stringify(venda);
      let cabecalho = new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({headers:cabecalho});
      return this.http.post(this.uri, bodyString, options)
        .map((res:Response) => {})
        .catch((erro:any) => Observable.throw(erro));
    }
  
    getVendaPorCodigo(id:number):Observable<Venda>	{
      return this.http.get(this.uri+"/"+id)
      .map((res:Response)=>res.json())		
      .catch((erro:any) => Observable.throw(erro));
    }
  
    removerVenda(id){
     let bodyString = JSON.stringify(id);
     let headers = new Headers({'Content-Type':'application/json'})
     let options = new RequestOptions({headers:headers});
     return this.http.delete(this.getVendaUrl(bodyString),options)
       .map(res => res.json())
       .catch((error:any)=>Observable.throw(error));
     }
  
    private getVendaUrl(id){
    return this.uri + "/" + id;
    }
  
    atualizaVenda(id:number, venda:Venda){      
      let bodyString = JSON.stringify(venda);
      let headers = new Headers({'Content-Type':'application/json'})
     let options = new RequestOptions({headers:headers});
     return this.http.put(this.getVendaUrl(id),bodyString,options)
       .map(res => res.json())
       .catch((error:any)=>Observable.throw(error));
       
  
    }

}
