import { Component, OnInit } from '@angular/core';
import { Cliente } from "../cliente";
import { CrudClientesService } from "../crud-clientes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.css']
})
export class TabelaClientesComponent implements OnInit {
  title = "Clientes";
  clientes:Cliente[]=[];
  erro:String;

  constructor(private servico:CrudClientesService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {    
    this.servico.getClientes().subscribe(
      data => { this.clientes = data; },
      error => { console.log(error); }
    );
  
  }
  

  

  remover(id:number){
    this.servico.removerCliente(id).subscribe(
      data => { this.clientes = data; this.router.navigate(['/listaClientes']);},
      error => this.erro = error
    );

  }
}
