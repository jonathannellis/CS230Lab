import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopSocialNavBarComponent } from './header/top-social-nav-bar.component';
import { ProductCarouselComponent } from './carousel/product-carousel.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { TopNavBarDropdownComponent } from './header/top-nav-bar-dropdown.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { LandingPageComponent } from './body/landing-page.component';
import { ProductCardGridFullWidthComponent } from './product-card-grid/product-card-grid-full-width.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutMainComponent,
    LandingPageComponent,
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
