import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { PensamentoInterface } from '../pensamentoInterface';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: false,
  templateUrl: './excluir-pensamento.html',
  styleUrl: './excluir-pensamento.css',
})
export class ExcluirPensamento {

  pensamento: PensamentoInterface = {
      id: 0,
      conteudo: '',
      autoria: '',
      modelo: ''
    }


  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
   ){}

   ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')
    if(id){
      this.service.buscarPorId(id).subscribe((pensamento) => {
        this.pensamento = pensamento
      })
    }
   }

   cancelarPensamento(){
    if(this.pensamento.id){
      this.service.deletar(this.pensamento.id).subscribe(() =>{
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }



}
