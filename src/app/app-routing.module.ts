import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './router-components/home/home.component';
import { StoreComponent } from './router-components/store/store.component';
import { ContactComponent } from './router-components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Services', component: HomeComponent },
  { path: 'Store', component: StoreComponent },
  { path: 'Contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
