import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PensamentoInterface } from './pensamentoInterface';
import { Observable } from 'rxjs';
import { Pensamento } from './pensamento/pensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient){ }

  listar(): Observable<PensamentoInterface[]>{
    return this.http.get<PensamentoInterface[]>(this.API)
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
