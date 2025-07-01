import {Component} from '@angular/core';
import {LucideAngularModule} from 'lucide-angular';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {nav} from '@core/layouts/bottom-nav/nav';

@Component({
    selector: 'app-bottom-nav',
    templateUrl: './bottom-nav.html',
    imports: [
        LucideAngularModule,
        RouterLink,
        RouterLinkActive
    ]
})

export class BottomNav {
    protected readonly nav = nav;
}
