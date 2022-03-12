import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/router-components/home/home.component';
import { StoreComponent } from './components/router-components/store/store.component';
import { ContactComponent } from './components/router-components/contact/contact.component';
import { CartComponent } from './components/router-components/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Services', component: HomeComponent },
  { path: 'Store', component: StoreComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
