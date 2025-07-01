import {Component} from '@angular/core';
import {BottomNav} from '@core/layouts/bottom-nav/bottom-nav';
import {Notes} from '@features/notes-dashboard/notes/notes';

@Component({
    selector: 'app-notes-dashboard-mobile',
    templateUrl: './notes-dashboard-mobile.html',
    imports: [
        BottomNav,
        Notes
    ]
})

export default class NotesDashboardMobile {

}
