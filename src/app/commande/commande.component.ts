import { Component, OnInit } from '@angular/core';
import{ Commande} from '../commande'
import { CommandeService } from '../commande.service'
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {

  commandes: Commande[];
 
  constructor(private commandeService: CommandeService,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService
    .getCommandesList()
    .subscribe((data: any[])=>{
      console.log(data);
      this.commandes = data;
    });
  }
  private getCommandes(){
    this.commandeService.getCommandesList().subscribe(data => {
      console.log(data);
      this.commandes = data;
    });
  }
  updateCommande(id: number){
    this.router.navigate(['modifier-commande', id]);
      }
  
  deleteProduit(id: number){
    this.commandeService.deleteCommande(id).subscribe(data=>{
      console.log(data);
      this.getCommandes();
      })
    }
  onDelete(id: number)
  {
    
  }

}
