import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ContentComponent} from './view/content/content.component';
import {SideNavigationComponent} from './view/side-navigation/side-navigation.component';
import {CustomersComponent} from './view/content/customers/customers.component';
import {DashboardComponent} from './view/content/dashboard/dashboard.component';
import {ItemsComponent} from './view/content/items/items.component';
import {PlaceOrderComponent} from './view/content/place-order/place-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SideNavigationComponent,
    CustomersComponent,
    DashboardComponent,
    ItemsComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
