import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camion } from '../camion';
import { CamionService } from '../camion.service';
@Component({
  selector: 'app-modifier-camion',
  templateUrl: './modifier-camion.component.html',
  styleUrls: ['./modifier-camion.component.scss']
})
export class ModifierCamionComponent implements OnInit {

  id: number;
 camion:Camion = new Camion();
  constructor(private camionService: CamionService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.camionService.getCamionById(this.id).subscribe(data =>{
      this.camion= data;
    } , error => console.log(error));
  
    
  }
onSubmit(){
  this.camionService.updateCamion(this.id , this.camion).subscribe( data => {
  this.goToCamionList();
  }, error => console.log(error));
}
goToCamionList()
{
this.router.navigate(['/list-cam']);
}
}
