import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{NewsfetchService} from '../providers/newsfetch.service';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FeaturedpostComponent } from './featuredpost/featuredpost.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FeaturedpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide:'news',useClass:NewsfetchService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
