import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgToastService } from 'ng-angular-popup';
import { Facture } from '../facture';
import { FactureService } from '../facture.service'

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {

  factures: Facture[];
  editfactEnable = false;
  id = 0;
  facture:Facture = new Facture();
  newFacture:Facture = new Facture();
  constructor(private factureService: FactureService,
    private router: Router,
    private toast: NgToastService) { }

    ngOnInit(): void {
      this.getFactures();
    }
    private getFactures(){
      this.factureService.getFacturesList().subscribe(data => {
        console.log(data);
        this.toast.success({detail:"Success Message",summary:"Facture ajouter",duration:5000})
        this.factures = data;
      });
    }
    updateFacture(id: number){
      this.id = id;
      this.editfactEnable = true;
      this.factureService.getFactureById(this.id).subscribe(data =>{
        
        this.facture= data;
        this.newFacture = data;
      } , error => console.log(error));
        }
    deleteFacture(id: number){
      this.factureService.deleteFacture(id).subscribe(data=>{
        console.log(data);
        this.getFactures();
        })
      }
    onDelete(id: number)
    {
      
    }
    onSubmit(){
      
      this.factureService.updateFacture(this.id , this.newFacture).subscribe( data => {
        window.location.reload();
      }, error => console.log(error));
    }
    
    close(){
      this.editfactEnable = false;
    }

}
