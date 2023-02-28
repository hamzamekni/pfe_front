import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss']
})


export class AjoutProduitComponent implements OnInit {

  produit: Produit= new Produit();
  selectedFile: File;
  constructor(private produitService: ProduitService, private router: Router, private http: HttpClient) { }
  message
  image = "6229c30e98f0a140574983.jpeg";
  ngOnInit(): void {}
  saveProduit()
  {
    console.log(this.produit.image, this.produit.imageFile);
    this.produitService.createProduit(this.produit).subscribe( data =>{
      
    },
    error=> {});
  }
  goToProduitList()
  {
this.router.navigate(['/list-produit']);
  }
  test(image){
    
  }
  onSubmit(){
    const uploadData = new FormData();
     uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    // this.http.post('http://localhost:8000/uploads/images/products/', this.produit.image)
    // .subscribe(event => {
    //   console.log("event : "+event); // handle event here
    // });
    console.log(this.selectedFile)
    this.produit.image = this.selectedFile.name;
    
    
    this.saveProduit();
    this.produitService.test(this.selectedFile).subscribe((data)=>{
      console.log(data);
    })
  }

  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0]
  }

  
  

}

