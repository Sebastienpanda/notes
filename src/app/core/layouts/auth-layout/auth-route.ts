import type {Routes} from '@angular/router';
import AuthLayout from './auth-layout';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayout,
        children: [
            // {
            //     path: 'inscription',
            //     loadComponent: () => import('@features/auth/register/register'),
            // },
            {
                path: 'login',
                loadComponent: () => import('@features/auth/pages/login/login'),
            },
            // {
            //     path: 'confirmation-email',
            //     loadComponent: () =>
            //         import('@features/auth/confirm-email/confirm-email'),
            // },
        ],
    },
];
