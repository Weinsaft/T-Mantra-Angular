import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import * as products from '../data/products.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})


export class AllProductsComponent implements OnInit {
  allProducts: Product[];
  type: any;

  constructor(public route: ActivatedRoute) { }

  womenItems: any[]=[];
  menItems: any[]=[];
  
  ngOnInit(): void {
    this.type= this.route.snapshot.params.type;
    if(this.type=="all"){
  this.allProducts= products["default"]; 
    }
    else if(this.type=="women"){
      this.allProducts= products["default"]; 
      this.allProducts.forEach(element => {
        if(element.gender=="women")
          this.womenItems.push(element);
      });
      this.allProducts=this.womenItems;
    }  else if(this.type=="men"){
      this.allProducts= products["default"]; 
      this.allProducts.forEach(element => {
        if(element.gender=="men")
          this.menItems.push(element);
      });

      this.allProducts=this.menItems;
    }
  }

}