import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { NewProductCardGridComponent } from './product-card-grid/new-product-card-grid.component';
import { AppRoutingModule } from './app-routing.module';
import { GroupBuyProductCardComponent } from './groupbuy-product-card/groupbuy-product-card.component';
import { GroupBuyHighlightsComponent } from './groupbuy-highlights/groupbuy-highlights.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { BottomLogoBarComponent } from './footer/bottom-logo-bar.component';
import { KeyboardPageComponent } from './body/keyboard-page.component';
import { UserInfoComponent } from './header/user-info.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthenticationComponent } from './authentication/authentication.component';

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
    NewProductCardGridComponent,
    GroupBuyProductCardComponent,
    GroupBuyHighlightsComponent,
    BottomNavBarComponent,
    BottomLogoBarComponent,
    KeyboardPageComponent,
    UserInfoComponent,
    AddProductComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'candykeys-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
