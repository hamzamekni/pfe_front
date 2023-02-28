import { Component, OnInit } from '@angular/core';
import { Camion } from '../camion';
import { Router } from '@angular/router';
import { CamionService } from '../camion.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ajout-camion',
  templateUrl: './ajout-camion.component.html',
  styleUrls: ['./ajout-camion.component.scss']
})
export class AjoutCamionComponent implements OnInit {

  camion: Camion= new Camion();
  constructor(private camionService: CamionService, private router: Router) { }


  ngOnInit(): void {}
  saveCamion()
  {
    this.camionService.createCamion(this.camion).subscribe( data =>{
       console.log(data)
       this.goToClienteeList();
    },
    error=> console.log(error));
  }
  goToClienteeList()
  {
this.router.navigate(['/list-cam']);
  }
  onSubmit(){
    console.log(this.camion);
    this.saveCamion();
  }

}
