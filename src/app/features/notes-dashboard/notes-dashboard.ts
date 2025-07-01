import {Component, inject} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map} from 'rxjs';
import NotesDashboardDesktop from '@core/layouts/notes-dashboard/desktop/notes-dashboard-desktop';
import NotesDashboardMobile from '@core/layouts/notes-dashboard/mobile/notes-dashboard-mobile';

@Component({
    selector: 'app-notes-dashboard',
    templateUrl: './notes-dashboard.html',
    imports: [
        NotesDashboardDesktop,
        NotesDashboardMobile
    ]
})

export default class NotesDashboard {
    isDesktop = inject(BreakpointObserver)
        .observe('(min-width: 1200px)')
        .pipe(map(result => result.matches));
}
