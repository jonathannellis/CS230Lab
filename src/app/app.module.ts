import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopSocialNavBarComponent } from './header/top-social-nav-bar.component';
import { NewsletterBarComponent } from './newsletter-bar/newsletter-bar.component';
import { ProductCarouselComponent } from './carousel/product-carousel.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { TopNavBarDropdownComponent } from './header/top-nav-bar-dropdown.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { LandingPageComponent } from './body/landing-page.component';
import { CategoryPageComponent } from './body/category-page.component';
import { LoginPageComponent } from './body/login-page.component';
import { CartPageComponent } from './body/cart-page.component';
import { ProductCardGridFullWidthComponent } from './product-card-grid/product-card-grid-full-width.component';
import { AppRoutingModule } from './app-routing.module';
import { GroupBuyProductCardComponent } from './groupbuy-product-card/groupbuy-product-card.component';
import { GroupBuyHighlightsComponent } from './groupbuy-highlights/groupbuy-highlights.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { BottomLogoBarComponent } from './footer/bottom-logo-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutMainComponent,
    LandingPageComponent,
    CategoryPageComponent,
    LoginPageComponent,
    CartPageComponent,
    TopNavBarComponent,
    TopNavBarDropdownComponent,
    TopSocialNavBarComponent,
    NewsletterBarComponent,
    ProductCarouselComponent,
    ProductCardComponent,
    ProductCardGridFullWidthComponent,
    GroupBuyProductCardComponent,
    GroupBuyHighlightsComponent,
    BottomNavBarComponent,
    BottomLogoBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
