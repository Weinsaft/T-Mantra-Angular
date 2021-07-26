import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){
  }
  // localStorage. setItem("my_colors", JSON. stringify(colors)); //store colors.
  ngOnInit(){
    // localStorage.setItem("wish-list", JSON. stringify([]));
    // console.log(localStorage.getItem("Aaa"));
    
  }
}