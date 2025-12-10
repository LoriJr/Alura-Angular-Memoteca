
import { Component, Input} from '@angular/core';
import { PensamentoInterface } from '../pensamentoInterface';


@Component({
  selector: 'app-pensamento',
  standalone: false,
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento {

  @Input() pensamento: PensamentoInterface = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'LouJunior',
    modelo: 'modelo3'
  }

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
