import {Component, signal} from '@angular/core';
import {Notes} from '@features/notes-dashboard/notes/notes';
import {Archive, Home, LucideAngularModule, Plus, Search, Settings, Tag, Trash} from 'lucide-angular';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
    selector: 'app-notes-dashboard-desktop',
    templateUrl: './notes-dashboard-desktop.html',
    imports: [
        Notes,
        LucideAngularModule,
        RouterLink,
        RouterLinkActive
    ]
})

export default class NotesDashboardDesktop {

    protected readonly Plus = Plus;
    protected readonly Search = Search;
    protected readonly Settings = Settings;
    protected readonly Archive = Archive;
    protected readonly Trash = Trash;

    readonly tags = signal([
        {
            id: 1,
            name: 'Angular',
        },
        {
            id: 2,
            name: 'JavaScript',
        },
        {
            id: 3,
            name: 'TypeScript',
        },
        {
            id: 4,
            name: 'React',
        },
        {
            id: 5,
            name: 'Vue',
        },
    ])
    protected readonly Home = Home;
    protected readonly Tag = Tag;
}
