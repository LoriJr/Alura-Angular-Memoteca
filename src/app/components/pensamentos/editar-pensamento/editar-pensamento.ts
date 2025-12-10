import { Component } from '@angular/core';
import { PensamentoInterface } from '../pensamentoInterface';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  standalone: false,
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css',
})
export class EditarPensamento {

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

  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(["/listarPensamento"])
    })
  }

  excluirPensamento(){
    this.router.navigate(["/listarPensamento"])
  }
}
