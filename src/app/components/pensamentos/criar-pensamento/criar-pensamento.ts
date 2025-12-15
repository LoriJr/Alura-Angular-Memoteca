import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {


  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  criarPensamento(){
    console.log(this.formulario.status)

    if(this.formulario.valid){
      this.service.cadastrar(this.formulario.value).subscribe(() =>{
        this.router.navigate(['listarPensamento'])
      })
    }
  }

  ngOnInit(){
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['modelo1']
    });
  }

  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }
}
