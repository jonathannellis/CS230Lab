import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopSocialNavBarComponent } from './header/top-social-nav-bar.component';
import { ProductCarouselComponent } from './body/product-carousel.component';
import { ProductCardComponent } from './body/product-card.component';
import { TopNavBarDropdownComponent } from './header/top-nav-bar-dropdown.component';
import { PrimaryLayoutComponent } from './layout/primary-layout.component';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { ProductCardGridFullWidthComponent } from './body/product-card-grid-full-width.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryLayoutComponent,
    HomeLayoutComponent,
    TopNavBarComponent,
    TopNavBarDropdownComponent,
    TopSocialNavBarComponent,
    ProductCarouselComponent,
    ProductCardComponent,
    ProductCardGridFullWidthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
