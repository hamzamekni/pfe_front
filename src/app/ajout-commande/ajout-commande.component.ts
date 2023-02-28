import { Component, OnInit } from '@angular/core';
import { Commande } from '../commande';
import { Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajout-commande',
  templateUrl: './ajout-commande.component.html',
  styleUrls: ['./ajout-commande.component.scss']
})
export class AjoutCommandeComponent implements OnInit {

  commande: Commande= new Commande();
  constructor(private commandeService: CommandeService, private router: Router) { }


  ngOnInit(): void {}
  saveCommande()
  {
    this.commandeService.createCommande(this.commande).subscribe( data =>{
       console.log(data)
       this.goToCommandeList();
    },
    error=> console.log(error));
  }
  goToCommandeList()
  {
this.router.navigate(['/commande']);
  }
  onSubmit(){
    console.log(this.commande);
    this.saveCommande();
  }

}
