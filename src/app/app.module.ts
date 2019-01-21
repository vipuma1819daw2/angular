import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/app.navComponent';
import { ContentAreaComponent } from './contentArea/app.contentAreaComponent';
import { FooterComponent } from './footer/app.footerComponent';
import { DirectoresComponent } from './directores/app.directoresComponent';
import { FilterPipe }from './directores/filter.pipe';
import { PeliculasComponent } from './peliculas/app.peliculasComponent';









@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentAreaComponent,
    FooterComponent,
    DirectoresComponent,
    FilterPipe,
    PeliculasComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'peliculas',
        component: PeliculasComponent
      },
      {
        path: 'directores',
        component: DirectoresComponent
      },
      
      {
        path: '',
        component: ContentAreaComponent
      }
    ]),
    
    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
