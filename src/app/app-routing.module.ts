import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerFormComponent } from './create-customer-form/create-customer-form.component';
import { HomeComponent } from './home/home.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'createCustomer', component: CreateCustomerFormComponent },
  { path: 'orderOverview', component: OrderOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
