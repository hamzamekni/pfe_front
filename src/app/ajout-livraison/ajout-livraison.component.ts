import { Component, OnInit } from '@angular/core';

import { LivraisonService } from '../livraison.service';
import { Router } from '@angular/router';
import { Livraison } from '../livraison';
@Component({
  selector: 'app-ajout-livraison',
  templateUrl: './ajout-livraison.component.html',
  styleUrls: ['./ajout-livraison.component.scss']
})
export class AjoutLivraisonComponent implements OnInit {

  livraison: Livraison= new Livraison();
  constructor(private livraisonService: LivraisonService, private router: Router) { }

  ngOnInit(): void {
  }
  saveClient()
  {
    this.livraisonService.createLivraison(this.livraison).subscribe( data =>{
       console.log(data)
       this.goToLivraisonList();
    },
    error=> console.log(error));
  }
  goToLivraisonList()
  {
this.router.navigate(['/livraison']);
  }
  onSubmit(){
    console.log(this.livraison);
    this.saveClient();
  }
}
