import { Observable, catchError, of, tap } from 'rxjs';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PensamentoInterface } from '../pensamentoInterface';
import { PensamentoService } from '../pensamento.service';



@Component({
  selector: 'app-listar-pensamento',
  standalone: false,
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento implements OnInit{

  listaPensamentos: PensamentoInterface[]=[];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  carregandoMensagem: boolean = true;

  constructor(
    private service: PensamentoService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(){

    //TODO - listar pensamentos na tela de inicialização
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) =>{
      this.listaPensamentos = listaPensamentos;
      this.carregandoMensagem = false;

      this.cdr.detectChanges();
      console.log('Dados atualizados e tela forçada a renderizar');
    })
  }

  carregarMaisPensamentos(){
     this.service.listar(++this.paginaAtual).subscribe(listaNovosPensamentos => {

      const itensNovos = listaNovosPensamentos.filter(novoPensamento =>{
        return !this.listaPensamentos.some(existente => existente.id === novoPensamento.id)
      })
          if(itensNovos.length > 0){
            this.listaPensamentos.push(...listaNovosPensamentos);
            this.haMaisPensamentos = false;
          }else{
            this.haMaisPensamentos = false;
          }
      })
  }
}
