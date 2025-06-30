import type {Routes} from '@angular/router';
import NotesDashboardLayout from '@core/layouts/notes-dashboard/notes-dashboard-layout';

const routes: Routes = [
    {
        path: '',
        component: NotesDashboardLayout,
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('@features/notes-dashboard/notes-dashboard'),
            },

        ],
    },
];

export default routes
