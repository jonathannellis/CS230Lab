import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './body/landing-page.component';
import { LoginPageComponent } from './body/login-page.component';
import { CartPageComponent } from './body/cart-page.component';
import { CategoryPageComponent } from './body/category-page.component';
import { KeyboardPageComponent } from './body/keyboard-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'category', component: CategoryPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'keyboards', component: KeyboardPageComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
