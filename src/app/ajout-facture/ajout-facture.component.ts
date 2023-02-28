import { Component, OnInit } from '@angular/core';

import { FactureService } from '../facture.service';
import { Router } from '@angular/router';
import { Facture } from '../facture';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-ajout-facture',
  templateUrl: './ajout-facture.component.html',
  styleUrls: ['./ajout-facture.component.scss']
})
export class AjoutFactureComponent implements OnInit {

  facture: Facture= new Facture();
  constructor(private factureService: FactureService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }
  saveClient()
  {
    this.factureService.createFacture(this.facture).subscribe( data =>{
       console.log(data)
       this.goToFactureList();
    },
    error=> console.log(error));
  }
  goToFactureList()
  {
this.router.navigate(['/facture']);
this.toast.success({detail:"Success Message",summary:"Facture ajouter",duration:5000})
  }
  onSubmit(){
    console.log(this.facture);
    this.saveClient();
  }

}
