import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderOverviewCustomerComponent } from './order-overview-customer/order-overview-customer.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Customer', 'Manager', 'Employee'] },
  },
  {
    path: 'newOrder',
    component: NewOrderComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Employee', 'Manager'] },
  },
  {
    path: 'orderOverview',
    component: OrderOverviewComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Manager'] },
  },
  {
    path: 'orderOverviewCustomer',
    component: OrderOverviewCustomerComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Customer'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
