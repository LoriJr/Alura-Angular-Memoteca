import { Component } from '@angular/core';
import { PensamentoInterface } from '../pensamentoInterface';
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
    console.log(this.formulario)

    if(this.formulario.valid){
      this.service.cadastrar(this.formulario.value).subscribe(() =>{
        this.router.navigate(['listarPensamento'])
      })
    }
  }

  excluirPensamento(){
    alert("voltou")
  }

  ngOnInit(){
    this.formulario = this.formBuilder.group({
      conteudo: ['', [Validators.required]],
      autoria: ['', [Validators.required]],
      modelo: ['modelo1']
    });
  }
}
