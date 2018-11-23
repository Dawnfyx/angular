import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sellerlist',
  templateUrl: './sellerlist.component.html',
  styleUrls: ['./sellerlist.component.css']
})
export class SellerlistComponent implements OnInit {

  private sellerId: number;

  constructor(private  routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.sellerId = this.routeInfo.snapshot.params['id'];
  }

}
