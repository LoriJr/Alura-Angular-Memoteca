import { Unsubscribable } from './../../../../../node_modules/type-fest/source/observable-like.d';

import { Component } from '@angular/core';
import { PensamentoInterface } from '../pensamentoInterface';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {

  pensamento: PensamentoInterface = {

    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ){}

  criarPensamento(){
    this.service.cadastrar(this.pensamento).subscribe(() =>{
      this.router.navigate(['listarPensamento'])
      alert(this.pensamento.autoria + " Pensamento salvo!")
    })
  }

  excluirPensamento(){
    alert("voltou")
  }
}
