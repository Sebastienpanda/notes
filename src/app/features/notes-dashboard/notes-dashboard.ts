import {Component, effect, inject, signal} from '@angular/core';
import {NotesService} from '@core/notes/notes-service';
import {Note} from '@core/notes/notes-model';
import {DatePipe} from '@angular/common';
import {BottomNav} from '@core/layouts/bottom-nav/bottom-nav';

@Component({
    selector: 'app-notes-dashboard',
    templateUrl: './notes-dashboard.html',
    imports: [
        DatePipe,
        BottomNav
    ]
})

export default class NotesDashboard {
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
