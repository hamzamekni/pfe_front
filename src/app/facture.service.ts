import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Facture } from './facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private baseURL = "http://localhost:8000/api/factures";

  constructor(private httpClient: HttpClient) { }

  getFacturesList(): Observable<Facture[]>{
    return this.httpClient.get<Facture[]>(`${this.baseURL}`);
  }
   createFacture(facture: Facture): Observable<Object>
   {
     return this.httpClient.post(`${this.baseURL}`, facture);
   }
   getFactureById(id: number): Observable<Facture>{
     return this.httpClient.get<Facture>(`${this.baseURL}/${id}`); 
   }
   updateFacture(id: number, facture: Facture):Observable<Object>
   {
     return this.httpClient.put(`${this.baseURL}/${id}`, facture);
   }
   deleteFacture(id: number): Observable<Object>
   {
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
   }
}
