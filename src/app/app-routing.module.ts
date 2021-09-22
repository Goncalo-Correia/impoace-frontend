import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './router-components/home/home.component';
import { CompanyComponent } from './router-components/company/company.component';
import { ServicesComponent } from './router-components/services/services.component';
import { StoreComponent } from './router-components/store/store.component';
import { ContactComponent } from './router-components/contact/contact.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Company', component: CompanyComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Store', component: StoreComponent },
  { path: 'Contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
