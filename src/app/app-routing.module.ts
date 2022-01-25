import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainpageComponent} from './views/main/mainpage/mainpage.component';
import {ViewcartComponent} from './views/main/viewcart/viewcart.component';
import {CheckoutComponent} from './views/main/checkout/checkout.component';


import { AccountviewComponent } from './views/main/user/accountview/accountview.component';
import { HomeComponent } from './views/main/user/accountview/home/home.component';
import { ProfileComponent } from './views/main/user/accountview/profile/profile.component';
import { FavsComponent } from './views/main/user/accountview/favs/favs.component';
import { StoreprofileComponent } from './views/main/user/storeprofile/storeprofile.component';


import { RegisterviewComponent } from './views/main/user/registerview/registerview.component';

import { MessagesComponent } from './views/main/user/accountview/messages/messages.component';
import { ShoppinghistoryComponent } from './views/main/user/accountview/shoppinghistory/shoppinghistory.component';
import { ViewPurchaseComponent } from './views/main/user/accountview/shoppinghistory/view-purchase/view-purchase.component';
import { ProductsComponent } from './views/main/user/accountview/products/products.component';
import { SaleshistoryComponent } from './views/main/user/accountview/saleshistory/saleshistory.component';
import { ViewSaleComponent } from './views/main/user/accountview/saleshistory/view-sale/view-sale.component';
import { AssociatesComponent } from './views/main/user/accountview/associates/associates.component';
import { EditprofileComponent } from './views/main/user/accountview/profile/tabs/editprofile/editprofile.component';
import { EditaddressComponent } from './views/main/user/accountview/profile/tabs/editaddress/editaddress.component';
import { EditpaysComponent } from './views/main/user/accountview/profile/tabs/editpays/editpays.component';
import { EditsuscriptionComponent } from './views/main/user/accountview/profile/tabs/editsuscription/editsuscription.component';
import { EditproductComponent } from './views/main/user/accountview/products/editproduct/editproduct.component';
import { AddproductComponent } from './views/main/user/accountview/products/addproduct/addproduct.component';

import {GeneralViewComponent} from './views/main/products/general-view/general-view.component';
import { ViewProductComponent } from './views/main/products/view-product/view-product.component';
import { ViewServiceComponent } from './views/main/products/view-service/view-service.component';


import { AuthGuard } from './guards/auth.guard';

import { LinksComponent } from './views/footer/links/links.component';
import { AboutusComponent } from './views/footer/links/aboutus/aboutus.component';
import { ContactComponent } from './views/footer/links/contact/contact.component';
import { FaqsComponent } from './views/footer/links/faqs/faqs.component';
import { PrivacityComponent } from './views/footer/links/privacity/privacity.component';
import { TermsandconditionsComponent } from './views/footer/links/termsandconditions/termsandconditions.component';
import { AssociatesfooterComponent } from './views/footer/links/associatesfooter/associatesfooter.component';


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
            path: 'editaddress/:id',
            component: EditaddressComponent
          },
          {
            path: 'editpays/:id',
            component: EditpaysComponent
          },
          {
            path: 'editsuscription/:id',
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
        path: 'shoppinghistory/:id',
        component: ShoppinghistoryComponent
      },
      {
        path: 'products/:id',
        component: ProductsComponent
      },
      {
        path: 'saleshistory/:id',
        component: SaleshistoryComponent
      },
      {
        path: 'associates',
        component: AssociatesComponent
      },
    ]
  },

  {path: 'registerview', component:RegisterviewComponent},
  {path: 'editproduct/:id', component: EditproductComponent},
  {path: 'addproduct', component: AddproductComponent},
  {path: 'storeprofile', component:StoreprofileComponent},

  {path: 'generalview', component:GeneralViewComponent},
  {path: 'viewservice', component:ViewServiceComponent},
  {path: 'viewproduct/:id', component:ViewProductComponent},
  
  {path: 'viewpurchase', component: ViewPurchaseComponent},
  {path: 'viewsale', component: ViewSaleComponent},

  {
    path: 'links', 
    component:LinksComponent,
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {path: 'aboutus', component: AboutusComponent},
      {path: 'faqs', component: FaqsComponent},
      {path: 'privacity', component: PrivacityComponent},
      {path: 'termsconditions', component: TermsandconditionsComponent},
      {path: 'associatesfooter', component:AssociatesfooterComponent},
    ]
  },
  {path: 'contact', component: ContactComponent},



]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
