import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  standalone: false,
  templateUrl: './botao-carregar-mais.html',
  styleUrl: './botao-carregar-mais.css',
})
export class BotaoCarregarMais{

  @Input() haMaisPensamentos: boolean = false;

}
