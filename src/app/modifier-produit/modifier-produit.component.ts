import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.scss']
})
export class ModifierProduitComponent implements OnInit {

  imageDirectoryPath: any = 'http://localhost:8000/api/Products/imageFile';
  id: number;
 produit:Produit = new Produit();
  constructor(private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.produitService.getProduitById(this.id).subscribe(data =>{
      this.produit= data;
    } , error => console.log(error));
  
    
  }
onSubmit(){
  this.produitService.updateProduit(this.id , this.produit).subscribe( data => {
  this.goToProduitList();
  }, error => console.log(error));
}
goToProduitList()
{
this.router.navigate(['/list-produit']);
}
}
