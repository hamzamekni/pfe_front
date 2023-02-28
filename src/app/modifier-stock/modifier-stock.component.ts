import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-modifier-stock',
  templateUrl: './modifier-stock.component.html',
  styleUrls: ['./modifier-stock.component.scss']
})
export class ModifierStockComponent implements OnInit {

  id: number;
  stock:Stock = new Stock();
  constructor(private stockService: StockService,
    private route: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
      this.id= this.route.snapshot.params['id'];
      this.stockService.getStockById(this.id).subscribe(data =>{
        this.stock= data;
      } , error => console.log(error));
    }
    onSubmit(){
      this.stockService.updateStock(this.id , this.stock).subscribe( data => {
      this.goToStockList();
      }, error => console.log(error));
    }
    goToStockList()
    {
    this.router.navigate(['/stock']);
    }


}
