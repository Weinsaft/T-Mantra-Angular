import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import * as products from '../data/products.json';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  topProducts: Product[]=[];

  constructor() { }
  ngOnInit(): void {
    this.topProducts.push(products["default"][0]);
    this.topProducts.push(products["default"][1]);
    this.topProducts.push(products["default"][2]);
    this.topProducts.push(products["default"][3]);
  }
}
