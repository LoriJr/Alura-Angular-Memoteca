import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PensamentoInterface } from './pensamentoInterface';
import { Observable } from 'rxjs';
import { Pensamento } from './pensamento/pensamento';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient){ }

  listar(pagina: number): Observable<PensamentoInterface[]>{

    const itensPorPagina = 6;

    let params = new HttpParams()
      .set("_page", pagina)
      .set("_per_page", itensPorPagina);

    return this.http.get<any>(this.API, {params}).pipe(map((retorno) => {
      if(retorno.data){
        return retorno.data
      }
      return retorno;
    }))
  }

  cadastrar(pensamento: PensamentoInterface): Observable<PensamentoInterface>{
    return this.http.post<PensamentoInterface>(this.API, pensamento)
  }

  deletar(id: string | number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: string | number): Observable<PensamentoInterface>{
    const url = `${this.API}/${id}`
    return this.http.get<PensamentoInterface>(url)
  }

  editar(pensamento: PensamentoInterface): Observable<PensamentoInterface>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<PensamentoInterface>(url, pensamento)
  }
}
