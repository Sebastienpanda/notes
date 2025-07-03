import {Injectable, signal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class NotesStore {
    selectedNote = signal<string | null>(null);

    select(noteId: string) {
        this.selectedNote.set(noteId);
    }

    clear() {
        this.selectedNote.set(null);
    }
}
