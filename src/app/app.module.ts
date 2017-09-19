import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import{HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import{HeroService} from './hero.service';
import { RouterModule }   from '@angular/router';
import {Pipe1, Pipe2} from './Globalpipe';
import { HttpModule }    from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import{DashboardComponent} from './dashboard.component';
import { HerosearchComponent } from './herosearch/herosearch.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HerosearchComponent,Pipe1,Pipe2
   ],
   
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),

    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
    ])
  ],
  
  providers: [HeroService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
