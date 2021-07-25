import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import * as products from '../data/products.json';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {

  constructor(public route: ActivatedRoute) {}
id: any;
products: Product[];
certainProduct: any;


  ngOnInit(): void {
    this.products= products["default"]; 
    this.id= this.route.snapshot.params.id;
    this.certainProduct= this.products.find(eachProduct => eachProduct.id === this.id);
  }
}