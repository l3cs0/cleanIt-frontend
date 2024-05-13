import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'newOrder',
    component: NewOrderComponent,
    canActivate: [AuthGuard],
    data: { roles: 'Employee' },
  },
  {
    path: 'orderOverview',
    component: OrderOverviewComponent,
    canActivate: [AuthGuard],
    data: { roles: 'Manager' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
