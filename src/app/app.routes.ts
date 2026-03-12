import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './services/auto-login';




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
        loadComponent: () => import('./pages/login/login').then(m=>m.Login)
    },
    {
        path: 'registration',
        loadComponent: () => import('./pages/registration/registration').then(m=>m.Registration)
    },
    {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'disease/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/disease-detail/disease-detail').then(m => m.DiseaseDetail)
    },
    {
        path: 'quiz/:id',
        canActivate:[authGuard],
        loadComponent:()=> import('./pages/quiz/quiz').then(m => m.Quiz)
    }
];
