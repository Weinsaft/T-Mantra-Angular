import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import * as products from '../data/products.json';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: Product[];

  constructor() { }

  ngOnInit(): void {
this.products= products["default"]; 
  }

}


