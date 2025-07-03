import {Component, effect, inject, signal} from '@angular/core';
import {DatePipe} from '@angular/common';
import {NotesService} from '@core/notes/notes-service';
import {Note} from '@core/notes/notes-model';
import {NotesStore} from '@core/store/notes-store';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.html',
    imports: [
        DatePipe,
    ]
})

export class Notes {
    private readonly notesService = inject(NotesService)
    private readonly notesStore = inject(NotesStore);

    selectedNoteId = this.notesStore.selectedNote;
    protected readonly notes = signal<Note[]>([])

    selectNote(noteId: string) {
        this.notesStore.select(noteId);
    }

    constructor() {
        effect(async () => {
            try {
                const notes = await this.notesService.getAllNotesWithTags();
                this.notes.set(notes);
            } catch (error) {
                console.error('Erreur lors de la récupération des notes :', error);
            }
        })
    }
}
