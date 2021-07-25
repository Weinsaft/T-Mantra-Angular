import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    public _router: Router
  ) {
   }
  @Input() product: Product

  ngOnInit(): void {
  }

  openCard(id: Number){
    this._router.navigateByUrl('/product/' +id)
  }

}
