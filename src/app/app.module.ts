import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {GridContentComponent} from './grid-content/grid-content.component';
import {InputSearchProductComponent} from './input-search-product/input-search-product.component';
import {ProductoService} from "./shared/producto.service";
import {InputSearchService} from "./shared/input-service.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridContentComponent,
    InputSearchProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [ProductoService, InputSearchService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
