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
    if(this.certainProduct.available)
    this.certainProduct.available= "In stock.";
    else
    this.certainProduct.available="Not in stock.";
  }

  wishList:any[];
  cart:any[];

  addToWishList(id: number){
    this.wishList= JSON.parse(localStorage.getItem("wish-list"));
    if(this.wishList==null)
      this.wishList=[];
    this.wishList.push(id);
    localStorage.setItem("wish-list", JSON. stringify(this.wishList))
  }

  addToCart(id: number){
    this.cart= JSON.parse(localStorage.getItem("cart"));
    if(this.cart==null)
      this.cart=[];
    this.cart.push(id);
    localStorage.setItem("cart", JSON. stringify(this.cart))
  }
}