import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

const routes: Routes = [];

@NgModule({


  imports: [


    RouterModule.forRoot([
      { path: '', component: CoursesComponent},
      { path: 'courses', component: CoursesComponent},
      { path: 'myprofile', component: MyprofileComponent},
      { path: 'mywishlist', component: MywishlistComponent},
      { path: 'shoppingcart', component: ShoppingcartComponent},
    ])
  ],



  exports: [RouterModule]
})
export class AppRoutingModule { }
