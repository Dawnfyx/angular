import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from '../stock.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  formModel:FormGroup;

  stock: Stock;
  private router: any;
  categories = ["it", "互联网", "金融"]

  constructor(private  routeInfo: ActivatedRoute, private stockService: StockService) { }

  ngOnInit() {
    let stockId = this.routeInfo.snapshot.params['id'];
    this.stock = this.stockService.getStock(stockId);

    let fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name:[this.stock.name, [Validators.required, Validators.minLength(3)]],
        price:[this.stock.price, Validators.required],
        desc: [this.stock.desc],
        categories: fb.array([
          new FormControl(this.stock.categories.indexOf(categories[0]) != -1),
          new FormControl(this.stock.categories.indexOf(categories[1]) != -1),
          new FormControl(this.stock.categories.indexOf(categories[2]) != -1)
        ])
      }
    )
  }

  cancel(){
    this.router.navigateByUrl('/stock');
  }
  save(){
    this.formModel.value.rating = this.stock.rating;
  }
}
