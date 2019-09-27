import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntryComponent } from './entry/entry.component';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes,RouterModule } from '@angular/router';
import { from } from 'rxjs';

const myRoutes:Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'add',
    component:EntryComponent
  },
  {
    path:'view',
    component:ViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryComponent,
    ViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
