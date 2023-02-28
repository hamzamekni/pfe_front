import { Component, OnInit } from '@angular/core';

import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';
import { Categorie } from '../categorie';
@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.scss']
})
export class AjoutCategorieComponent implements OnInit {

  categorie: Categorie= new Categorie();
  constructor(private categorieService: CategorieService, private router: Router) { }

  ngOnInit(): void {
  }
  saveCategorie()
  {
    this.categorieService.createCategorie(this.categorie).subscribe( data =>{
       console.log(data)
       this.goToCategorieList();
    },
    error=> console.log(error));
  }
  goToCategorieList()
  {
this.router.navigate(['/categorie']);
  }
  onSubmit(){
    console.log(this.categorie);
    this.saveCategorie();
  }
}
