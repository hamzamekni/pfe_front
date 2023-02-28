import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Livraison } from '../livraison'
import { LivraisonService } from '../livraison.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.scss']
})
export class LivraisonComponent implements OnInit {

  livraisons: Livraison[];

  constructor(private livraisonService: LivraisonService,
    private router: Router) { }

    ngOnInit(): void {
      this.getLivraisons();
    }
    private getLivraisons(){
      this.livraisonService.getLivraisonsList().subscribe(data => {
        console.log(data);
        this.livraisons = data;
      });
    }
    updateLivraison(id: number){
      this.router.navigate(['modifier-livraison', id]);
        }
    deleteLivraison(id: number){
      this.livraisonService.deleteLivraison(id).subscribe(data=>{
        console.log(data);
        this.getLivraisons();
        })
      }
    onDelete(id: number)
    {
      
    }


}
