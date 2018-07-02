import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core/core';
import {PostComponent} from '../components/post/post.component';




const APP_ROUTES: Routes = [
  {path: '', component: PostComponent},
  {path: 'posts', component: PostComponent },
  { path: '**', redirectTo: '/posts' }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
