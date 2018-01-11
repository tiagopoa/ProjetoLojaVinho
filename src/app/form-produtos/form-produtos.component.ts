import { Component, OnInit } from '@angular/core';
import { CrudProdutosService } from '../crud-produtos.service';
import { Produto } from "../produto";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  title = "Cadastro de Produtos";
  produto:Produto;
  id: number;

  constructor(private servico:CrudProdutosService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params['id']; 

    if(isNaN(this.id)){
      this.produto= new Produto();
    } else {
      
        this.servico.getProdutoPorCodigo(this.id).subscribe(
          data => { this.produto = data; },
          erro => { console.log('ERROR', erro); }
        );
      
    }

}

  salvarProduto(){
    if(isNaN(this.id)){
      this.servico.adicionarProduto(this.produto).subscribe(
        data => { this.cancelar(); this.router.navigate(['/listaProdutos'])},
        erro => { console.log(erro); }
      );
        this.produto = new Produto();
        this.router.navigate(['/listaProdutos']);
    } else {
      this.servico.atualizaProduto(this.id, this.produto).subscribe(
        produto => this.router.navigate(['/listaProdutos']), 
        erro =>  console.log(erro));
    }
      this.router.navigate(['/listaProdutos']);
  }

  cancelar(){ this.router.navigate(['/listaProdutos']);
  }

}
