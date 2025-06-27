import type {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
    },
    {
        path: "",
        loadChildren: () =>
            import('@core/layouts/auth-layout/auth-route').then((m) => m.routes),
    }
];
