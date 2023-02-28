import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Categorie } from '../categorie'
import { CategorieService } from '../categorie.service';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories: Categorie[];
  editCatEnable = false;
  id = 0;
  categorie:Categorie = new Categorie();
  newcategorie:Categorie = new Categorie();
  constructor(private categorieService: CategorieService,
    private router: Router) { }

    ngOnInit(): void {
      this.getCategories();
    }
    private getCategories(){
      this.categorieService.getCategoriesList().subscribe(data => {
        console.log(data);
        this.categories = data;
      });
    }
    updateCategorie(id: number){
      // this.router.navigate(['modifier-categorie', id]);
      this.id = id;
      this.editCatEnable = true;
      this.categorieService.getCategorieById(this.id).subscribe(data =>{
        this.categorie= data;
        this.newcategorie = data;
      } , error => console.log(error));
        }
    deleteCategorie(id: number){
      this.categorieService.deleteCategorie(id).subscribe(data=>{
        console.log(data);
        this.getCategories();
        })
      }
    onDelete(id: number)
    {
      
    }
    onSubmit(){
      
      this.categorieService.updateCategorie(this.id , this.newcategorie).subscribe( data => {
        window.location.reload();
      }, error => console.log(error));
    }
    
    close(){
      this.editCatEnable = false;
    }

}
