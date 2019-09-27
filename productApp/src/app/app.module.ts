import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EntryComponent } from './entry/entry.component';
import { SearchComponent } from './search/search.component';

import { Routes,RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';

const myRoutes:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"entry",
    component: EntryComponent
  },
  {
    path:"search",
    component:SearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntryComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
