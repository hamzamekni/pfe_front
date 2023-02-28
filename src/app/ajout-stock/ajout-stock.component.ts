import { Component, OnInit } from '@angular/core';

import { StockService } from '../stock.service';
import { Router } from '@angular/router';
import { Stock } from '../stock';
@Component({
  selector: 'app-ajout-stock',
  templateUrl: './ajout-stock.component.html',
  styleUrls: ['./ajout-stock.component.scss']
})
export class AjoutStockComponent implements OnInit {

  stock: Stock= new Stock();
  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
  }
  saveStock()
  {
    this.stockService.createStock(this.stock).subscribe( data =>{
       console.log(data)
       this.goToStockList();
    },
    error=> console.log(error));
  }
  goToStockList()
  {
this.router.navigate(['/stock']);
  }
  onSubmit(){
    console.log(this.stock);
    this.saveStock();
  }

}
