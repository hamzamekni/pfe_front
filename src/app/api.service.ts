import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './produit';
import { Facture } from './facture';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post('login', { username, password });
  }

  getProduitsList(): Observable<Produit[]>{
    return this.http.get<Produit[]>('http://localhost:8000/api/products/', {
      headers: {},
    });
  }

  getCommandesList(): Observable<Commande[]>{
    return this.http.get<Commande[]>('http://localhost:8000/api/commandes/', {
      headers: {},
    });
  }

  getFacturesList(): Observable<Facture[]>{
    return this.http.get<Facture[]>('http://localhost:8000/api/factures/', {
      headers: {},
    });
  }
}
