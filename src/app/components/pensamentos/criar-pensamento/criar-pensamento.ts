import { Component } from '@angular/core';
import { PensamentoInterface } from '../pensamentoInterface';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {

  pensamento: PensamentoInterface = {

    conteudo: '',
    autoria: '',
    modelo: ''
  }

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  criarPensamento(){
    this.service.cadastrar(this.pensamento).subscribe(() =>{
      this.router.navigate(['listarPensamento'])
      alert(this.pensamento.autoria + " Pensamento salvo!")
    })
  }

  excluirPensamento(){
    alert("voltou")
  }

  ngOnInit(){
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário reativo'],
      autoria: [''],
      modelo: ['modelo1']
    });
  }
}
