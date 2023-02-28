import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livraison } from '../livraison';
import { LivraisonService } from '../livraison.service';


@Component({
  selector: 'app-modifier-livraison',
  templateUrl: './modifier-livraison.component.html',
  styleUrls: ['./modifier-livraison.component.scss']
})
export class ModifierLivraisonComponent implements OnInit {

  id: number;
  livraison:Livraison = new Livraison();
  constructor(private livraisonService: LivraisonService,
    private route: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
      this.id= this.route.snapshot.params['id'];
      this.livraisonService.getLivraisonById(this.id).subscribe(data =>{
        this.livraison= data;
      } , error => console.log(error));
    }
    onSubmit(){
      this.livraisonService.updateLivraison(this.id , this.livraison).subscribe( data => {
      this.goToLivraisonList();
      }, error => console.log(error));
    }
    goToLivraisonList()
    {
    this.router.navigate(['/livraison']);
    }


}
