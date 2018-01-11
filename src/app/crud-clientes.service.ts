import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Cliente } from "./cliente";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/RX";


@Injectable()
export class CrudClientesService {
        cliente: Cliente[] = [];
        uri = "http://localhost:8080/LojaVinhos/api/clientes";
        uri_cli="http://www.mocky.io/v2/598b16291100004705515ec5​";

        autoIncrement = 1;

  constructor(private http: Http) {  }

  getClientes():Observable<Cliente[]> {
    return this.http.get(this.uri)
    .map((res:Response)=>res.json())
    .catch((erro:any) => Observable.throw(erro));
    }  
  
    adicionarCliente(cliente:Cliente):Observable<Cliente>{
    let bodyString = JSON.parse(this.uri_cli);//JSON.stringify(cliente);    
      let cabecalho = new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({headers:cabecalho});
      return this.http.post(this.uri, bodyString, options)
        .map((res:Response) => {})
        .catch((erro:any) => Observable.throw(erro));
    }
  
    getClientePorCodigo(id:number):Observable<Cliente>	{
      return this.http.get(this.uri+"/"+id)
      .map((res:Response)=>res.json())		
      .catch((erro:any) => Observable.throw(erro));
    }
  
    removerCliente(id){
     let bodyString = JSON.stringify(id);
     let headers = new Headers({'Content-Type':'application/json'})
     let options = new RequestOptions({headers:headers});
     return this.http.delete(this.getClienteUrl(bodyString),options)
       .map(res => res.json())
       .catch((error:any)=>Observable.throw(error));
     }
  
    private getClienteUrl(id){
    return this.uri + "/" + id;
    }
  
    atualizaCliente(id:number, cliente:Cliente){
      let bodyString = JSON.stringify(cliente);
      let headers = new Headers({'Content-Type':'application/json'})
     let options = new RequestOptions({headers:headers});
     return this.http.put(this.getClienteUrl(id),bodyString,options)
       .map(res => res.json())
       .catch((error:any)=>Observable.throw(error));
       
  
    }



}
