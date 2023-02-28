import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseURL = "http://localhost:8000/api/stocks";

  constructor(private httpClient: HttpClient) { }

  getStocksList(): Observable<Stock[]>{
    return this.httpClient.get<Stock[]>(`${this.baseURL}`);
  }
   createStock(stock: Stock): Observable<Object>
   {
     return this.httpClient.post(`${this.baseURL}`, stock);
   }
   getStockById(id: number): Observable<Stock>{
     return this.httpClient.get<Stock>(`${this.baseURL}/${id}`); 
   }
   updateStock(id: number, stock: Stock):Observable<Object>
   {
     return this.httpClient.put(`${this.baseURL}/${id}`, stock);
   }
   deleteStock(id: number): Observable<Object>
   {
  return this.httpClient.delete(`${this.baseURL}/${id}`); 
   }
}
