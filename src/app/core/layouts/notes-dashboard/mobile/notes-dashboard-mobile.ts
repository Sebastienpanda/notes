import {Component, inject} from '@angular/core';
import {BottomNav} from '@core/layouts/bottom-nav/bottom-nav';
import {Notes} from '@features/notes-dashboard/notes/notes';
import {NotesStore} from '@core/store/notes-store';
import {Archive, ArrowLeft, LucideAngularModule, Trash} from 'lucide-angular';
import {NotesSelected} from '@features/notes-dashboard/notes-selected/notes-selected';

@Component({
    selector: 'app-notes-dashboard-mobile',
    templateUrl: './notes-dashboard-mobile.html',
    imports: [
        BottomNav,
        Notes,
        LucideAngularModule,
        NotesSelected
    ]
})

export default class NotesDashboardMobile {
    readonly selectedNote = inject(NotesStore).selectedNote;

    goBack() {
        this.selectedNote.set(null);
    }

    protected readonly Trash = Trash;
    protected readonly Archive = Archive;
    protected readonly ArrowLeft = ArrowLeft;
}
