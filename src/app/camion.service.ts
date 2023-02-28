import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Camion } from './camion';
@Injectable({
  providedIn: 'root'
})
export class CamionService {
  private baseURL = "http://localhost:8080/camion";

  constructor(private httpClient: HttpClient) { }
  
  getCamionsList(): Observable<Camion[]>{
    return this.httpClient.get<Camion[]>(`${this.baseURL+'/all'}`);
  }
   createCamion(camion: Camion): Observable<Object>
   {
     return this.httpClient.post(`${this.baseURL+'/add'}`, camion);
   }
   getCamionById(id: number): Observable<Camion>{
     return this.httpClient.get<Camion>(`${this.baseURL}/${id}`); 
   }
   updateCamion(id: number, camion: Camion):Observable<Object>
   {
     return this.httpClient.put(`${this.baseURL+'/update'}/${id}`, camion);
   }
   deleteCamion(id: number): Observable<Object>
   {
  return this.httpClient.delete(`${this.baseURL+'/delete'}/${id}`); 
   }
}