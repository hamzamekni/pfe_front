import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';
@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.scss']
})
export class ModifierClientComponent implements OnInit {

  id: number;
  client:Client = new Client();
   constructor(private produitService: ClientService,
     private route: ActivatedRoute,
     private router: Router ) { }
 
   ngOnInit(): void {
     this.id= this.route.snapshot.params['id'];
     this.produitService.getClientById(this.id).subscribe(data =>{
       this.client= data;
     } , error => console.log(error));
   
     
   }
 onSubmit(){
   this.produitService.updateClient(this.id , this.client).subscribe( data => {
   this.goToProduitList();
   }, error => console.log(error));
 }
 goToProduitList()
 {
 this.router.navigate(['/list-client']);
 }
 }