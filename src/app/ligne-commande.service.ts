import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LigneCommande } from './ligne-commande';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  private baseURL = "http://localhost:8000/api/ligne_commandes";

  constructor(private httpClient: HttpClient) { }
  
  getLigneCommandesList(): Observable<LigneCommande[]>{
    return this.httpClient.get<LigneCommande[]>(`${this.baseURL}`);
  }
   createLigneCommande(ligneCommande: LigneCommande): Observable<Object>
   {
     return this.httpClient.post(`${this.baseURL}`, ligneCommande);
   }
   getLigneCommandeById(id: number): Observable<LigneCommande>{
     return this.httpClient.get<LigneCommande>(`${this.baseURL}/${id}`); 
   }
   updateLigneCommande(id: number, ligneCommande: LigneCommande):Observable<Object>
   {
     return this.httpClient.put(`${this.baseURL}/${id}`, ligneCommande);
   }
   deleteLigneCommande(id: number): Observable<Object>
   {
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
   }
}
