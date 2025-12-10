import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Rodape } from './components/rodape/rodape';
import { CriarPensamento } from './components/pensamentos/criar-pensamento/criar-pensamento';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarPensamento } from './components/pensamentos/listar-pensamento/listar-pensamento';
import { Pensamento } from './components/pensamentos/pensamento/pensamento';
import { provideHttpClient } from '@angular/common/http';
import { ExcluirPensamento } from './components/pensamentos/excluir-pensamento/excluir-pensamento';
import { EditarPensamento } from './components/pensamentos/editar-pensamento/editar-pensamento';




@NgModule({
  declarations: [
    App,
    Home,
    Cabecalho,
    Rodape,
    CriarPensamento,
    ListarPensamento,
    Pensamento,
    ExcluirPensamento,
    EditarPensamento
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
