import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [

  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    loadChildren: './home-page/home-page.module#HomePageModule'
  }
];


