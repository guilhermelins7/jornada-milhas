import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../types/type';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PromocaoService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpCliente: HttpClient) {}

  listar(): Observable<Promocao[]> {
    return this.httpCliente.get<Promocao[]>(`${this.apiUrl}/promocoes`);
  }
}
