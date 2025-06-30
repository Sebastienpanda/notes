import type {Routes} from '@angular/router';
import AuthLayout from './auth-layout';

const routes: Routes = [
    {
        path: '',
        component: AuthLayout,
        children: [
            {
                path: 'register',
                loadComponent: () => import('@features/auth/pages/register/register'),
            },
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

export default routes
