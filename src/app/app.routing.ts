import { Routes, RouterModule } from '@angular/router';
import { FeaturedpostComponent } from './featuredpost/featuredpost.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

const appRoutes: Routes = [
 
     {path: '', component:FeaturedpostComponent},
     {path: 'detail/:id', component: MoviedetailComponent},         
     { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);