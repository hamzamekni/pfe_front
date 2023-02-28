import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Stock } from '../stock'
import { StockService } from '../stock.service';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  stocks: Stock[];

  constructor(private stockService: StockService,
    private router: Router) { }

    ngOnInit(): void {
      this.getStocks();
    }
    private getStocks(){
      this.stockService.getStocksList().subscribe(data => {
        console.log(data);
        this.stocks = data;
      });
    }
    updateStock(id: number){
      this.router.navigate(['modifier-stock', id]);
        }
        deleteStock(id: number){
          this.stockService.deleteStock(id).subscribe(data=>{
            console.log(data);
            this.getStocks();
            })
          }
        onDelete(id: number)
        {
          
        }


}
