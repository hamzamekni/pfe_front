import { Component, OnInit } from '@angular/core';
import{ LigneCommande} from '../ligne-commande'
import { LigneCommandeService } from '../ligne-commande.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-ligne-commande',
  templateUrl: './ligne-commande.component.html',
  styleUrls: ['./ligne-commande.component.scss']
})
export class LigneCommandeComponent implements OnInit {

  ligneCommades: LigneCommande[];
 
  constructor(private ligneCommandeService: LigneCommandeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getLigneCommandes();
  }
  private getLigneCommandes(){
    this.ligneCommandeService.getLigneCommandesList().subscribe(data => {
      console.log(data);
      this.ligneCommades = data;
    });
  }

  updateLigneCommande(id: number){
    this.router.navigate(['modifier-ligneCommande', id]);
      }
  deleteLigneCommande(id: number){
    this.ligneCommandeService.deleteLigneCommande(id).subscribe(data=>{
      console.log(data);
      this.getLigneCommandes();
      })
    }
  onDelete(id: number)
  {
    
  }

}
