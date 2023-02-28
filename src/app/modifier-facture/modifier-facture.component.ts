import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../facture';
import { FactureService } from '../facture.service';
@Component({
  selector: 'app-modifier-facture',
  templateUrl: './modifier-facture.component.html',
  styleUrls: ['./modifier-facture.component.scss']
})
export class ModifierFactureComponent implements OnInit {

  id: number;
  facture:Facture = new Facture();
  constructor(private factureService: FactureService,
    private route: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
      this.id= this.route.snapshot.params['id'];
      this.factureService.getFactureById(this.id).subscribe(data =>{
        this.facture= data;
      } , error => console.log(error));
    }
    onSubmit(){
      this.factureService.updateFacture(this.id , this.facture).subscribe( data => {
      this.goToFactureList();
      }, error => console.log(error));
    }
    goToFactureList()
    {
    this.router.navigate(['/facture']);
    }

}
