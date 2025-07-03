import {Component, inject, signal} from '@angular/core';
import {BottomNav} from '@core/layouts/bottom-nav/bottom-nav';
import {Notes} from '@features/notes-dashboard/notes/notes';
import {NotesStore} from '@core/store/notes-store';
import {Archive, ArrowLeft, LucideAngularModule, Plus, Trash} from 'lucide-angular';
import {NotesSelected} from '@features/notes-dashboard/notes-selected/notes-selected';
import {CreateNoteComponent} from '@features/notes-dashboard/notes/pages/create-note';

@Component({
    selector: 'app-notes-dashboard-mobile',
    templateUrl: './notes-dashboard-mobile.html',
    imports: [
        BottomNav,
        Notes,
        LucideAngularModule,
        NotesSelected,
        CreateNoteComponent
    ]
})

export default class NotesDashboardMobile {
    protected readonly createNote = signal(false)
    readonly selectedNote = inject(NotesStore).selectedNote;

    goBack() {
        this.selectedNote.set(null);
        this.createNote.set(false);
    }

    createNewNote() {
        this.createNote.set(true);
    }

    protected readonly Trash = Trash;
    protected readonly Archive = Archive;
    protected readonly ArrowLeft = ArrowLeft;
    protected readonly Plus = Plus;
}
