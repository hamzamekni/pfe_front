import { Component, OnInit } from '@angular/core';
import{ Client} from '../client'
import { ClientService } from '../client.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  clients: Client[];
  editUtiliEnable = false;
  id = 0;
  client:Client = new Client();
  newClient:Client = new Client();
  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getClients();
  }
  private getClients(){
    this.clientService.getClientsList().subscribe(data => {
      console.log(data);
      this.clients = data;
    });
  }

  updateClient(id: number){
    this.id = id;
    this.editUtiliEnable = true;
    this.clientService.getClientById(this.id).subscribe(data =>{
      this.client= data;
      this.newClient = data;
    } , error => console.log(error));
      }
  deleteClient(id: number){
    this.clientService.deleteCleint(id).subscribe(data=>{
      console.log(data);
      this.getClients();
      })
    }
  onDelete(id: number)
  {
    
  }

  onSubmit(){
      
    this.clientService.updateClient(this.id , this.newClient).subscribe( data => {
      window.location.reload();
    }, error => console.log(error));
  }
  
  close(){
    this.editUtiliEnable = false;
  }
}