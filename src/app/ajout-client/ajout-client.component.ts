import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.scss']
})
export class AjoutClientComponent implements OnInit {

  client: Client= new Client();
  constructor(private camionService: ClientService, private router: Router) { }


  ngOnInit(): void {}
  saveClient()
  {
    this.camionService.createClient(this.client).subscribe( data =>{
       console.log(data)
       this.goToClienteeList();
    },
    error=> console.log(error));
  }
  goToClienteeList()
  {
this.router.navigate(['/list-client']);
  }
  onSubmit(){
    console.log(this.client);
    this.saveClient();
  }

}
