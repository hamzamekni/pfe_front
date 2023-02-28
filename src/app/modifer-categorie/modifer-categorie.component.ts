import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';
@Component({
  selector: 'app-modifer-categorie',
  templateUrl: './modifer-categorie.component.html',
  styleUrls: ['./modifer-categorie.component.scss']
})
export class ModiferCategorieComponent implements OnInit {

  id: number;
  categorie:Categorie = new Categorie();
  constructor(private categorieService: CategorieService,
    private route: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
      this.id= this.route.snapshot.params['id'];
      this.categorieService.getCategorieById(this.id).subscribe(data =>{
        this.categorie= data;
      } , error => console.log(error));
    }
    onSubmit(){
      this.categorieService.updateCategorie(this.id , this.categorie).subscribe( data => {
      this.goToCategorieList();
      }, error => console.log(error));
    }
    goToCategorieList()
    {
    this.router.navigate(['/categorie']);
    }
}
