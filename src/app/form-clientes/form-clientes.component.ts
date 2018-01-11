import { Component, OnInit } from '@angular/core';
import { CrudClientesService } from '../crud-clientes.service';
import { Cliente } from "../cliente";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {
  erro: any;
	title = "Cadastro de Clientes";
	cliente:Cliente;
  id: number;

  constructor(private servico:CrudClientesService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params['id'];

    if(isNaN(this.id)){
      this.cliente = new Cliente();
    }

    if(!isNaN(this.id)) {
      this.servico.getClientePorCodigo(this.id).subscribe(
        data => { this.cliente = data; },
        erro => { console.log('ERROR', erro); }
      );
    }

  }

  salvarCliente(){    
    
    if(isNaN(this.id)){
      this.servico.adicionarCliente(this.cliente).subscribe(
      cliente => { this.cancelar(); this.router.navigate(['/listaClientes'])},
      erro => { console.log(erro); }
    );
      this.cliente = new Cliente();
      this.router.navigate(['/listaClientes']);
    } else {
      this.servico.atualizaCliente(this.id, this.cliente).subscribe(
        cliente => { this.router.navigate(['/listaClientes']); },
        erro => console.log(erro));
               
    }



  }

  cancelar(){
    this.router.navigate(['/listaClientes']);
  }

}
