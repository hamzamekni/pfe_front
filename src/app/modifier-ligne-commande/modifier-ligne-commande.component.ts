import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LigneCommande } from '../ligne-commande';
import { LigneCommandeService } from '../ligne-commande.service';

@Component({
  selector: 'app-modifier-ligne-commande',
  templateUrl: './modifier-ligne-commande.component.html',
  styleUrls: ['./modifier-ligne-commande.component.scss']
})
export class ModifierLigneCommandeComponent implements OnInit {

  id: number;
  ligneCommande:LigneCommande = new LigneCommande();
   constructor(private ligneCommandeService: LigneCommandeService,
     private route: ActivatedRoute,
     private router: Router ) { }
 
   ngOnInit(): void {
     this.id= this.route.snapshot.params['id'];
     this.ligneCommandeService.getLigneCommandeById(this.id).subscribe(data =>{
       this.ligneCommande= data;
     } , error => console.log(error));
   
     
   }
 onSubmit(){
   this.ligneCommandeService.updateLigneCommande(this.id , this.ligneCommande).subscribe( data => {
   this.goToLigneCommandeList();
   }, error => console.log(error));
 }
 goToLigneCommandeList()
 {
 this.router.navigate(['/ligne-commande']);
 }

}
