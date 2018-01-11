import { Component, OnInit } from '@angular/core';
import { Venda } from "../venda";
import { CrudVendasService } from "../crud-vendas.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tabela-vendas',
  templateUrl: './tabela-vendas.component.html',
  styleUrls: ['./tabela-vendas.component.css']
})
export class TabelaVendasComponent implements OnInit {
  title = "Vendas";
  vendas:Venda[]=[];
  erro:String;

  constructor(private servico:CrudVendasService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {
    this.servico.getVendas().subscribe(
      data => { this.vendas = data; },
      error => { console.log(error); }
    );
  }

  remover(id:number){
    this.servico.removerVenda(id).subscribe(
      data => { this.vendas = data; this.router.navigate(['/listaVendas']);},
      error => this.erro = error
    );
  }

}
