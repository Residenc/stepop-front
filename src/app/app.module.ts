import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { MainpageComponent } from './views/main/mainpage/mainpage.component';

import { ViewcartComponent } from './views/main/viewcart/viewcart.component';
import { CheckoutComponent } from './views/main/checkout/checkout.component';
import { CartComponent } from './views/header/bs_components/offcanvas/cart/cart.component';

import { SigninComponent } from './views/header/bs_components/modals/signin/signin.component';
import { AccountviewComponent } from './views/main/user/accountview/accountview.component';
import { RegisterviewComponent } from './views/main/user/registerview/registerview.component';

//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './views/main/user/accountview/home/home.component';
import { ProfileComponent } from './views/main/user/accountview/profile/profile.component';
import { FavsComponent } from './views/main/user/accountview/favs/favs.component';
import { MessagesComponent } from './views/main/user/accountview/messages/messages.component';
import { SaleshistoryComponent } from './views/main/user/accountview/saleshistory/saleshistory.component';
import { ShoppinghistoryComponent } from './views/main/user/accountview/shoppinghistory/shoppinghistory.component';
import { ProductsComponent } from './views/main/user/accountview/products/products.component';
import { AssociatesComponent } from './views/main/user/accountview/associates/associates.component';
import { EditprofileComponent } from './views/main/user/accountview/profile/tabs/editprofile/editprofile.component';
import { EditaddressComponent } from './views/main/user/accountview/profile/tabs/editaddress/editaddress.component';
import { EditpaysComponent } from './views/main/user/accountview/profile/tabs/editpays/editpays.component';
import { EditsuscriptionComponent } from './views/main/user/accountview/profile/tabs/editsuscription/editsuscription.component';
import { EditproductComponent } from './views/main/user/accountview/products/editproduct/editproduct.component';
import { AddproductComponent } from './views/main/user/accountview/products/addproduct/addproduct.component';

import { ViewProductComponent } from './views/main/products/view-product/view-product.component';
import { GeneralViewComponent } from './views/main/products/general-view/general-view.component';
import { QuickViewComponent } from './views/main/products/quick-view/quick-view.component';

import{JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import {LoadScriptsService} from "./services/load-scripts/load-scripts.service";
import { StoreprofileComponent } from './views/main/user/storeprofile/storeprofile.component';
import { ViewServiceComponent } from './views/main/products/view-service/view-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    CartComponent,
    SigninComponent,
    ViewcartComponent,
    CheckoutComponent,
    AccountviewComponent,
    RegisterviewComponent,
    ViewProductComponent,
    HomeComponent,
    ProfileComponent,
    FavsComponent,
    MessagesComponent,
    SaleshistoryComponent,
    ShoppinghistoryComponent,
    ProductsComponent,
    AssociatesComponent,
    EditprofileComponent,
    EditaddressComponent,
    EditpaysComponent,
    EditsuscriptionComponent,
    EditproductComponent,
    GeneralViewComponent,
    QuickViewComponent,
    AddproductComponent,
    StoreprofileComponent,
    ViewServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    //jwt
    {provide: JWT_OPTIONS, useValue:JWT_OPTIONS},
    JwtHelperService,
    LoadScriptsService,
    //{provide:LocationStrategy, useClass: HashLocationStrategy}
    // tokeninterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
