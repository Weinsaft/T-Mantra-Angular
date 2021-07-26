import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import * as products from '../data/products.json';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})


export class AllProductsComponent implements OnInit {
  allProducts: Product[];

  constructor() { }
  ngOnInit(): void {
console.log(products);


  this.allProducts= products["default"]; 
  }

}