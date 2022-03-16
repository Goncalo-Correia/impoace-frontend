import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { StoreComponent } from './components/router-components/store/store.component';
import { StoreMenuComponent } from './components/store-components/store-menu.component/store-menu.component';
import { StoreProductsComponent } from './components/store-components/store-products.component/store-products.component';
import { ContactBarComponent } from './components/layout-components/bottom-bar-component/bottom-bar.component';
import { Dialog_HomeReport } from './components/router-components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    Dialog_HomeReport,
    ContactBarComponent,
    StoreMenuComponent,
    StoreProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule
  ],
  entryComponents: [
    Dialog_HomeReport
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
