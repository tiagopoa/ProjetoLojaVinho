import { Component, OnInit } from '@angular/core';
import { CrudVendasService } from '../crud-vendas.service';
import { Venda } from "../venda";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-vendas',
  templateUrl: './form-vendas.component.html',
  styleUrls: ['./form-vendas.component.css']
})
export class FormVendasComponent implements OnInit {
  erro: any;
	title = "Cadastro Vendas";
	venda:Venda;
  id: number;

  constructor(private servico:CrudVendasService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params['id'];

    if(isNaN(this.id)){
      this.venda = new Venda();
    }

    if(!isNaN(this.id)) {
      this.servico.getVendaPorCodigo(this.id).subscribe(
        data => { this.venda = data; },
        erro => { console.log('ERROR', erro); }
      );
    }
  }

  salvarVenda(){    
    
    if(isNaN(this.id)){
      this.servico.adicionarVenda(this.venda).subscribe(
      venda => { this.cancelar(); this.router.navigate(['/listaVendas'])},
      erro => { console.log(erro); });
      this.venda = new Venda();
      this.router.navigate(['/listaVendas']);
    } else {
      this.servico.atualizaVenda(this.id, this.venda).subscribe(
        venda =>  this.router.navigate(['/listaVendas']),
        erro =>  console.log(erro));
               
    }



  }

  cancelar(){
    this.router.navigate(['/listaVendas']);
  }


}
