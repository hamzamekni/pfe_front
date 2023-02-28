import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseURL = "http://localhost:8000/api/products";

  constructor(private httpClient: HttpClient) { }

  getImage(imageUrl: string): Observable<Blob> { return this.httpClient.get(imageUrl, { responseType: 'blob' }); }
  
  test(image: File){
    return this.httpClient.post("http://localhost:8000/test",image);
  }
  getProduitsList(): Observable<Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.baseURL}`);
  }
   createProduit(Produit: Produit): Observable<Object>
   {
     return this.httpClient.post(`${this.baseURL}`, Produit);
   }
   getProduitById(id: number): Observable<Produit>{
     return this.httpClient.get<Produit>(`${this.baseURL}/${id}`); 
   }
   updateProduit(id: number, Produit: Produit):Observable<Object>
   {
     return this.httpClient.put(`${this.baseURL}/${id}`, Produit);
   }
   deleteProduit(id: number): Observable<Object>
   {
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
   }
}

