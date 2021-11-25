import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainpageComponent} from './views/main/mainpage/mainpage.component';
import {ViewcartComponent} from './views/main/viewcart/viewcart.component';
import {CheckoutComponent} from './views/main/checkout/checkout.component';


import { AccountviewComponent } from './views/main/user/accountview/accountview.component';
import { HomeComponent } from './views/main/user/accountview/home/home.component';
import { ProfileComponent } from './views/main/user/accountview/profile/profile.component';
import { FavsComponent } from './views/main/user/accountview/favs/favs.component';


import { RegisterviewComponent } from './views/main/user/registerview/registerview.component';
import { ViewProductComponent } from './views/main/products/view-product/view-product.component';
import { MessagesComponent } from './views/main/user/accountview/messages/messages.component';
import { ShoppinghistoryComponent } from './views/main/user/accountview/shoppinghistory/shoppinghistory.component';
import { ProductsComponent } from './views/main/user/accountview/products/products.component';
import { SaleshistoryComponent } from './views/main/user/accountview/saleshistory/saleshistory.component';
import { AssociatesComponent } from './views/main/user/accountview/associates/associates.component';
import { EditprofileComponent } from './views/main/user/accountview/profile/tabs/editprofile/editprofile.component';
import { EditaddressComponent } from './views/main/user/accountview/profile/tabs/editaddress/editaddress.component';
import { EditpaysComponent } from './views/main/user/accountview/profile/tabs/editpays/editpays.component';
import { EditsuscriptionComponent } from './views/main/user/accountview/profile/tabs/editsuscription/editsuscription.component';
import { EditproductComponent } from './views/main/user/accountview/products/editproduct/editproduct.component';
import { AddproductComponent } from './views/main/user/accountview/products/addproduct/addproduct.component';

import {GeneralViewComponent} from './views/main/products/general-view/general-view.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [

  {path:'', redirectTo:'/main', pathMatch:'full'},
  {path:'main' , component: MainpageComponent},
  {path: 'viewcart', component:ViewcartComponent},
  {path: 'checkout', component:CheckoutComponent},

  {
    path: 'accountview', 
    component:AccountviewComponent,canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {
        path: 'home/:id',
        component: HomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: '',
            redirectTo: 'editprofile',
            pathMatch: 'full'
          },
          {
            path: 'editprofile/:id',
            component: EditprofileComponent
          },
          {
            path: 'editaddress',
            component: EditaddressComponent
          },
          {
            path: 'editpays',
            component: EditpaysComponent
          },
          {
            path: 'editsuscription',
            component: EditsuscriptionComponent
          }
        ]
      },
      {
        path: 'favs',
        component: FavsComponent, 
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'shoppinghistory',
        component: ShoppinghistoryComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'saleshistory',
        component: SaleshistoryComponent
      },
      {
        path: 'associates',
        component: AssociatesComponent
      },
    ]
  },

  {path: 'registerview', component:RegisterviewComponent},
  {path: 'viewproduct/:id', component:ViewProductComponent},
  {path: 'editproduct/:id', component: EditproductComponent},
  {path: 'addproduct', component: AddproductComponent},
  {path: 'generalview', component:GeneralViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
