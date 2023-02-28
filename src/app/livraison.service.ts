import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Livraison } from './livraison';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  private baseURL = "http://localhost:8000/api/livraisons";

  constructor(private httpClient: HttpClient) { }

  getLivraisonsList(): Observable<Livraison[]>{
    return this.httpClient.get<Livraison[]>(`${this.baseURL}`);
  }
   createLivraison(livraison: Livraison): Observable<Object>
   {
     return this.httpClient.post(`${this.baseURL}`, livraison);
   }
   getLivraisonById(id: number): Observable<Livraison>{
     return this.httpClient.get<Livraison>(`${this.baseURL}/${id}`); 
   }
   updateLivraison(id: number, livraison: Livraison):Observable<Object>
   {
     return this.httpClient.put(`${this.baseURL}/${id}`, livraison);
   }
   deleteLivraison(id: number): Observable<Object>
   {
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
   }
}
