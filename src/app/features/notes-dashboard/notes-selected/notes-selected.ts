import {Component, effect, inject, input, signal} from '@angular/core';
import {NotesService} from '@core/notes/notes-service';
import {Note} from '@core/notes/notes-model';
import {DatePipe} from '@angular/common';
import {Clock, LucideAngularModule, Tag} from 'lucide-angular';

@Component({
    selector: 'app-notes-selected',
    templateUrl: './notes-selected.html',
    imports: [
        DatePipe,
        LucideAngularModule,

    ]
})
export class NotesSelected {
    readonly noteId = input.required<string | null>();
    private readonly notesService = inject(NotesService);
    readonly note = signal<Note | null>(null);

    constructor() {
        effect(() => {
            const id = this.noteId();
            if (!id) return;

            void this.loadNote(id);
        });
    }

    private async loadNote(id: string) {
        try {
            const note = await this.notesService.getNoteById(id);
            this.note.set(note);
        } catch (e) {
            console.error('Erreur chargement note :', e);
            this.note.set(null);
        }
    }

    protected readonly Tag = Tag;
    protected readonly Clock = Clock;
}
