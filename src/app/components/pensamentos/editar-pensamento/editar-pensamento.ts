import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  standalone: false,
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css',
})
export class EditarPensamento {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ){}

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id')

    this.formulario = this.formBuilder.group({
      id: [null], // Inicializa como null
      conteudo: ['', Validators.compose([ // Inicializa vazio
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['modelo1'] // Um valor padrão evita erros visuais
    });


    if(id){
      this.service.buscarPorId(id).subscribe((pensamento) => {
        this.formulario.patchValue({
          id: pensamento.id,
          conteudo: pensamento.conteudo,
          autoria: pensamento.autoria,
          modelo: pensamento.modelo
        })
      })
    }
  }

  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }

  editarPensamento(){
    if(this.formulario.valid){
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(["listarPensamento"])
      })
    }
  }
}
