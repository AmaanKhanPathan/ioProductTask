import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsFormComponent } from './shared/components/products-form/products-form.component';
import { ProductsDashboardComponent } from './shared/components/products-dashboard/products-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsFormComponent,
    ProductsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
