import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ Camion } from '../camion'
import { CamionService } from '../camion.service'
@Component({
  selector: 'app-camion',
  templateUrl: './camion.component.html',
  styleUrls: ['./camion.component.scss']
})
export class CamionComponent implements OnInit {
  camions: Camion[];
 
  constructor(private camionService: CamionService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCamions();
  }
  private getCamions(){
    this.camionService.getCamionsList().subscribe(data => {
      console.log(data);
      this.camions = data;
    });
  }

  updateCamion(id: number){
    this.router.navigate(['modif-cam', id]);
      }
  deleteCamion(id: number){
    this.camionService.deleteCamion(id).subscribe(data=>{
      console.log(data);
      this.getCamions();
      })
    }
  onDelete(id: number)
  {
    
  }
}