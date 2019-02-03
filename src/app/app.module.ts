import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app-routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
