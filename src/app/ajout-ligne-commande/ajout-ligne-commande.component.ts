import { Component, OnInit } from '@angular/core';
import { LigneCommande } from '../ligne-commande';
import { Router } from '@angular/router';
import { LigneCommandeService } from '../ligne-commande.service';
@Component({
  selector: 'app-ajout-ligne-commande',
  templateUrl: './ajout-ligne-commande.component.html',
  styleUrls: ['./ajout-ligne-commande.component.scss']
})
export class AjoutLigneCommandeComponent implements OnInit {

  ligneCommande: LigneCommande= new LigneCommande();
  constructor(private ligneCommandeService: LigneCommandeService, private router: Router) { }


  ngOnInit(): void {}
  saveLigneCommande()
  {
    this.ligneCommandeService.createLigneCommande(this.ligneCommande).subscribe( data =>{
       console.log(data)
       this.goToLigneCommandeList();
    },
    error=> console.log(error));
  }
  goToLigneCommandeList()
  {
this.router.navigate(['/ligne-commande']);
  }
  onSubmit(){
    console.log(this.ligneCommande);
    this.saveLigneCommande();
  }

}
