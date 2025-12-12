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

      // Filtramos a lista que chegou: Só queremos itens cujo ID NÃO esteja na lista atual
      const itensNovos = listaNovosPensamentos.filter(novoPensamento =>{
        // O método .some() retorna true se encontrar alguém igual.
        // O ! na frente inverte: só passa se NÃO encontrar ninguém igual.
        return !this.listaPensamentos.some(existente => existente.id === novoPensamento.id)
      })
          if(itensNovos.length > 0){
            this.listaPensamentos.push(...itensNovos);
          }
          if (!listaNovosPensamentos.length || itensNovos.length < 6) {
          this.haMaisPensamentos = false;
        }

        this.cdr.detectChanges();
      })
  }
}
