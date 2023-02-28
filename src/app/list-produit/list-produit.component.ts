import { Component, OnInit } from '@angular/core';
import{ Produit} from '../produit'
import { ProduitService } from '../produit.service'
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit {

  imageDirectoryPath: any = 'http://localhost:8000/api/products?imageFile=';
  stockDirectoryPath: any = 'http://localhost:8000';
  produits: Produit[];
  id = 0;
  editProdEnable = false;
  produit: Produit = new Produit();
  newProduit: Produit = new Produit();
  constructor(private clientService: ProduitService,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService
    .getProduitsList()
    .subscribe((data: any[])=>{
      console.log(data);
      this.produits = data;
    });
  }
  private getProduits(){
    this.clientService.getProduitsList().subscribe(data => {
      console.log(data);
      this.produits = data;
    });
  }
  updateProduit(id: number){
    this.id = id;
      this.editProdEnable = true;
      this.clientService.getProduitById(this.id).subscribe(data =>{
        this.produit= data;
        this.newProduit = data;
      } , error => console.log(error));
      }
  
  deleteProduit(id: number){
    this.clientService.deleteProduit(id).subscribe(data=>{
      console.log(data);
      this.getProduits();
      })
    }
  onDelete(id: number)
  {
    
  }

  imageToShow: any; createImageFromBlob(image: Blob) { let reader = new FileReader(); reader.addEventListener("load", () => { this.imageToShow = reader.result; }, false); if (image) { reader.readAsDataURL(image); } }
 
 
  onSubmit(){
      
    this.clientService.updateProduit(this.id , this.newProduit).subscribe( data => {
      window.location.reload();
    }, error => console.log(error));
  }
  
  close(){
    this.editProdEnable = false;
  }


}