import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ContactComponent } from './contact/contact.component';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  {path: 'product/:id' , component: ProductDataComponent},
  {path: 'catagories' , component: CatagoriesComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'all-products' , component: AllProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }