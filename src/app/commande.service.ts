import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private baseURL = "http://localhost:8000/api/commandes";

  constructor(private httpClient: HttpClient) { }
  
  
  getCommandesList(): Observable<Commande[]>{
    return this.httpClient.get<Commande[]>(`${this.baseURL}`);
  }
   createCommande(Commande: Commande): Observable<Object>
   {
     return this.httpClient.post(`${this.baseURL}`, Commande);
   }
   getCommandeById(id: number): Observable<Commande>{
     return this.httpClient.get<Commande>(`${this.baseURL}/${id}`); 
   }
   updateCommande(id: number, commande: Commande):Observable<Object>
   {
     return this.httpClient.put(`${this.baseURL}/${id}`, commande);
   }
   deleteCommande(id: number): Observable<Object>
   {
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
   }
}
