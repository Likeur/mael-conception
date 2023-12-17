import { Routes } from '@angular/router';

export const routes: Routes = [
    {
       path:'home',
       title: 'Mael-conception',
       loadComponent : () => import('./pages/home/home.component') 
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    }
];
