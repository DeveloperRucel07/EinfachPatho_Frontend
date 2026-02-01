import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo : 'home',
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'login',
        loadComponent: () => import('./components/form-login/form-login').then(m=>m.FormLogin)
    },
    {
        path: 'signup',
        loadComponent: () => import('./components/form-signup/form-signup').then(m => m.FormSignup)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'disease/:id',
        loadComponent: () => import('./pages/disease-detail/disease-detail').then(m => m.DiseaseDetail)
    }

];
