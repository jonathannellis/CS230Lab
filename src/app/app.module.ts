import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopSocialNavBarComponent } from './header/top-social-nav-bar.component';
import { ProductCarouselComponent } from './body/product-carousel.component';
import { ProductCardComponent } from './body/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopSocialNavBarComponent,
    ProductCarouselComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
