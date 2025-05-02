import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UnidadeFederativa } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class UnidadeFederativaService {
  private apiUrl = environment.apiUrl;
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<UnidadeFederativa[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstado().pipe(shareReplay(1));
    }

    return this.cache$;
  }

  private requestEstado(): Observable<UnidadeFederativa[]> {
    return this.httpClient.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }
}
