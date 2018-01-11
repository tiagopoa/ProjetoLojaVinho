import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// As 3 Linhas abaixo são imports para o BOOTSTRAP
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
// Fim das 3 linhas do Bootstrap


import { AppComponent } from './app.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
//import { CrudProdutosService } from "./crud-produtos.service";
//import { CrudUsuariosService } from "./crud-usuarios.service";
import { CrudClientesService } from "./crud-clientes.service";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
//import { TabelaUsuariosComponent } from './tabela-usuarios/tabela-usuarios.component';
//import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { HttpModule } from "@angular/http";
import { TabelaVendasComponent } from './tabela-vendas/tabela-vendas.component';
import { FormVendasComponent } from './form-vendas/form-vendas.component';
import { CrudProdutosService } from './crud-produtos.service';
import { CrudVendasService } from './crud-vendas.service';

const routes: Routes = [
  { path: '', redirectTo: 'listaProdutos', pathMatch: 'full' },
  { path: 'listaProdutos', component: TabelaProdutosComponent },
  { path: 'edicaoProduto/:id', component: FormProdutosComponent },  
  { path: 'edicaoCliente/:id', component: FormClientesComponent },
  { path: 'edicaoVenda/:id', component: FormVendasComponent },
  { path: 'novoProduto', component: FormProdutosComponent },
  { path: 'novaVenda', component: FormVendasComponent },
  { path: 'listaVendas', component: TabelaVendasComponent },
  { path: 'novoCliente', component: FormClientesComponent },
  { path: 'listaClientes/:id', component: TabelaClientesComponent }
  
];


@NgModule({
  declarations: [
    AppComponent,
    TabelaClientesComponent,
    TabelaProdutosComponent,
    TabelaVendasComponent,
    FormClientesComponent,
    FormProdutosComponent,
    FormVendasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    BsDropdownModule.forRoot(), //Bootstrap
    TooltipModule.forRoot(), //Bootstrap
    ModalModule.forRoot() //Bootstrap
  ],
  providers: [CrudClientesService, CrudProdutosService, CrudVendasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
