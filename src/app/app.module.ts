import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }      from './app.routing';
import{NewsfetchService} from '../providers/newsfetch.service';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FeaturedpostComponent } from './featuredpost/featuredpost.component';
import { CurrentnewsComponent } from './currentnews/currentnews.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FeaturedpostComponent,
    CurrentnewsComponent,
    MoviedetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing 
  ],
  providers: [{provide:'news',useClass:NewsfetchService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
