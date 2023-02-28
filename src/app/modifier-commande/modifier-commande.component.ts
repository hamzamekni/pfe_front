import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-modifier-commande',
  templateUrl: './modifier-commande.component.html',
  styleUrls: ['./modifier-commande.component.scss']
})
export class ModifierCommandeComponent implements OnInit {

  id: number;
 commande:Commande = new Commande();
  constructor(private commandeService: CommandeService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.commandeService.getCommandeById(this.id).subscribe(data =>{
      this.commande= data;
    } , error => console.log(error));
  
    
  }
onSubmit(){
  this.commandeService.updateCommande(this.id , this.commande).subscribe( data => {
  this.goToCommandeList();
  }, error => console.log(error));
}
goToCommandeList()
{
this.router.navigate(['/commande']);
}

}
