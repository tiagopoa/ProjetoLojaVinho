import { Component, OnInit } from '@angular/core';
import { Produto } from "../produto";
import { CrudProdutosService } from "../crud-produtos.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  titulo = "Estoque";
  produtos:Produto[]=[];
  erro:String;

  constructor(private servico:CrudProdutosService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {
    this.servico.getProdutos().subscribe(
      data => { this.produtos = data; },
      error => { console.log(error); }
    );
  }

  remover(codigo:number){  
    this.servico.removerProduto(codigo).subscribe(
      data => { this.produtos = data; window.location.reload()},
      error => this.erro = error
    );
    this.router.navigate(['/listaProdutos']);
  }


}
