import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts/accounts.component';
import { PaymentsComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AccountsComponent,
    PaymentsComponent  // Fix this line
  ],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
