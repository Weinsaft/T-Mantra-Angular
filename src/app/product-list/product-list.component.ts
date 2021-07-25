import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  constructor() { }
  @Input() productList: Product[];

  ngOnInit(): void {
    this.productList.splice(4,this.productList.length);
  }

}
