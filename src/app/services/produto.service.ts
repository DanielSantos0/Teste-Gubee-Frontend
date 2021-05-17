import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Produto } from '../models/produto';
import { FormsModule }   from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAll(tecnologias: string, mercadosAlvos: string) {

    let queryParams = new HttpParams()
    .set('tecnologias', tecnologias)
    .set('mercadosAlvos', mercadosAlvos);
    
    return this.http.get<Produto[]>(`${environment.apiUrl}/produtos`, { params: queryParams });
  }
}
