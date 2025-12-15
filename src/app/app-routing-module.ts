import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamento } from './components/pensamentos/listar-pensamento/listar-pensamento';
import { CriarPensamento } from './components/pensamentos/criar-pensamento/criar-pensamento';
import { ExcluirPensamento } from './components/pensamentos/excluir-pensamento/excluir-pensamento';
import { EditarPensamento } from './components/pensamentos/editar-pensamento/editar-pensamento';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './components/pensamentos/listar-pensamento/custom-reuse-estrategy';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamento
  },
  {
    path: 'listarPensamento',
    component: ListarPensamento
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamento
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamento
  },
  {
    path: 'listarPensamento',
    component: ListarPensamento,
    data: {
      reuseComponent: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
})
export class AppRoutingModule { }
