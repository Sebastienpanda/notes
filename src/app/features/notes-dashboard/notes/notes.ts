import {Component, effect, inject, signal} from '@angular/core';
import {DatePipe} from '@angular/common';
import {NotesService} from '@core/notes/notes-service';
import {Note} from '@core/notes/notes-model';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.html',
    imports: [
        DatePipe
    ]
})

export class Notes {
    private readonly notesService = inject(NotesService)
    protected readonly notes = signal<Note[]>([])

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
