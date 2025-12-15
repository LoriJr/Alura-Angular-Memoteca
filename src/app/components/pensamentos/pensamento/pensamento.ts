
import { Component, Input} from '@angular/core';
import { PensamentoInterface } from '../pensamentoInterface';
import { PensamentoService } from '../pensamento.service';


@Component({
  selector: 'app-pensamento',
  standalone: false,
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})

export class Pensamento {

  constructor(private service: PensamentoService){}

  @Input() pensamento!: PensamentoInterface;

  @Input() listaFavoritos: PensamentoInterface[] = []

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  alternarIconeFavorito(): string{
    if(this.pensamento.favorito == false){
      return 'inativo';
    }
    return 'ativo'
  }

  atualizarFavorito(){
    this.service.mudarFavorito(this.pensamento).subscribe(()=>{
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
    });
  }

}
