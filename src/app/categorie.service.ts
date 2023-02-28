import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Categorie } from './categorie';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private baseURL = "http://localhost:8000/api/categories";

  constructor(private httpClient: HttpClient) { }
  
  
  getCategoriesList(): Observable<Categorie[]>{
    return this.httpClient.get<Categorie[]>(`${this.baseURL}`);
  }
   createCategorie(categorie: Categorie): Observable<Object>
   {
     return this.httpClient.post(`${this.baseURL}`, categorie);
   }
   getCategorieById(id: number): Observable<Categorie>{
     return this.httpClient.get<Categorie>(`${this.baseURL}/${id}`); 
   }
   updateCategorie(id: number, categorie: Categorie):Observable<Object>
   {
     return this.httpClient.put(`${this.baseURL}/${id}`, categorie);
   }
   deleteCategorie(id: number): Observable<Object>
   {
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
   }
}
