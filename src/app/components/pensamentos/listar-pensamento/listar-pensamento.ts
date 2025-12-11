import { Observable, catchError, of, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PensamentoInterface } from '../pensamentoInterface';
import { PensamentoService } from '../pensamento.service';


@Component({
  selector: 'app-listar-pensamento',
  standalone: false,
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento implements OnInit{

  listaPensamentos$!: Observable<PensamentoInterface[]>;
  paginaAtual: number = 1;

  constructor(private service: PensamentoService){}

  ngOnInit(): void{



    this.listaPensamentos$ = this.service.listar(this.paginaAtual).pipe(
      tap((dados) => console.log('DADOS NO PIPE:', dados)),

      catchError((error) => {
        console.error('ERRO NA REQUISIÇÃO', error);
        alert('Erro ao buscar dados. Verifique o console');
        return of ([]);
      })
    );
  }
}
