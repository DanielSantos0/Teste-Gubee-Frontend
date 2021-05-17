import { Component } from '@angular/core';
import { FiltroProduto } from './models/filtro-produto';
import { Produto } from './models/produto';
import { ProdutoService } from './services/produto.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teste-gubee-frontend';
  closeResult = '';

  filtro: FiltroProduto = new FiltroProduto();
  produtos: Produto[] = [];
  listaModal: string[] = [];
  tituloModal: string = '';

  constructor(private produtoService: ProdutoService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.filtrar();
  }

  filtrar() {
    this.produtoService.getAll(this.filtro.tecnologias, this.filtro.mercadosAlvos).subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });
  }

  limparFiltros() {
    this.filtro.tecnologias = '';
    this.filtro.mercadosAlvos = '';
  }

  abrirModal(content, tituloModal: string, listaModal: string[]) {
    this.listaModal = listaModal;
    this.tituloModal = tituloModal;

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}