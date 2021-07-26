import { TmplAstElement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import * as products from '../data/products.json';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  wishList: any[];
  cartList: any[];
  products: any;
  newWishlist:any[]=[];
  newCartlist:any[]=[];
  totalPrice: number=0;

   ngOnInit() {
    this.products= products["default"]; 
    this.wishList=JSON.parse(localStorage.getItem("wish-list"));
    if(this.wishList){
     this.wishList.forEach(element => {
      element= this.products.find(eachProduct => eachProduct.id == element);
      this.newWishlist.push(element);
      console.log(element.price);
      
    });
  }
    this.cartList=  JSON.parse(localStorage.getItem("cart"));
    if(this.cartList){
    this.cartList.forEach(element => {
      element= this.products.find(eachProduct => eachProduct.id == element);
      this.newCartlist.push(element);
      // console.log(this.totalPrice);
      this.totalPrice+= element.price;
    });
  }
}

  deleteProductFromWishList(id: number){
    this.wishList=JSON.parse(localStorage.getItem("wish-list"));
    let index = this.wishList.findIndex(index  => index == id );
    this.newWishlist.splice(index,1);
    this.wishList.splice(index,1);
    localStorage.setItem("wish-list",JSON.stringify(this.wishList))
  }

  deleteProductFromCart(id: number){
    let element= this.products.find(eachProduct => eachProduct.id == id);
    this.totalPrice-= element.price;

    this.cartList=JSON.parse(localStorage.getItem("cart"));
    let index = this.cartList.findIndex(index  => index == id );
    this.newCartlist.splice(index,1);
    this.cartList.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(this.cartList))
  }

  addToCart(id: number){
    let element= this.products.find(eachProduct => eachProduct.id == id);
    this.totalPrice+= element.price;

    this.newCartlist.push(this.products.find(eachProduct => eachProduct.id == id));

    this.cartList=JSON.parse(localStorage.getItem("cart"));
    if(!this.cartList){
      this.cartList=[];
    }
    this.cartList.push(id);
    localStorage.setItem("cart", JSON.stringify(this.cartList));

    this.wishList=JSON.parse(localStorage.getItem("wish-list"));
    let index = this.wishList.findIndex(index  => index == id );
    this.newWishlist.splice(index,1);
    this.wishList.splice(index,1);
    localStorage.setItem("wish-list",JSON.stringify(this.wishList))
  }

  openDialog(data) {
    let dialogRef = this.dialog.open(data, {
     width: '500px',
   });
  }
}
