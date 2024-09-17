import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CmpBannerComponent } from './cmp-banner/cmp-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpBannerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
