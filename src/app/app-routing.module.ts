import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SideNavigationComponent} from './view/side-navigation/side-navigation.component';
import {CustomersComponent} from './view/content/customers/customers.component';
import {ItemsComponent} from './view/content/items/items.component';
import {PlaceOrderComponent} from './view/content/place-order/place-order.component';
import {DashboardComponent} from './view/content/dashboard/dashboard.component';
import {LoginComponent} from './view/login/login.component';

const routes: Routes = [
  {path: 'navigation', component: SideNavigationComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'order', component: PlaceOrderComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
