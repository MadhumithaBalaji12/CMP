import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { PaymentsComponent } from './payment/payment.component';


const routes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  { path: 'payments', component: PaymentsComponent }  // Fix this line
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
