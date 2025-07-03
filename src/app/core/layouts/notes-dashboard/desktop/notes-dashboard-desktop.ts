import {Component, effect, inject, signal} from '@angular/core';
import {Notes} from '@features/notes-dashboard/notes/notes';
import {Archive, Home, LucideAngularModule, Plus, Search, Settings, Tag, Trash} from 'lucide-angular';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NotesStore} from '@core/store/notes-store';
import {NotesSelected} from '@features/notes-dashboard/notes-selected/notes-selected';
import {TagsService} from '@core/tags/tags-service';
import {Tag as TagModel} from '@core/tags/tags-model';
import {CreateNoteComponent} from '@features/notes-dashboard/notes/pages/create-note';

@Component({
    selector: 'app-notes-dashboard-desktop',
    templateUrl: './notes-dashboard-desktop.html',
    imports: [
        Notes,
        LucideAngularModule,
        RouterLink,
        RouterLinkActive,
        NotesSelected,
        CreateNoteComponent
    ]
})

export default class NotesDashboardDesktop {

    protected readonly Plus = Plus;
    protected readonly Search = Search;
    protected readonly Settings = Settings;
    protected readonly Archive = Archive;
    protected readonly Trash = Trash;


    protected readonly Home = Home;
    protected readonly Tag = Tag;

    protected readonly notesStore = inject(NotesStore);
    protected readonly tagsService = inject(TagsService);
    protected readonly createNote = signal(false)

    protected readonly tags = signal<TagModel[]>([])


    constructor() {
        effect(async () => {
            try {
                const tags = await this.tagsService.getAllTags()
                this.tags.set(tags);
            } catch (error) {
                console.error('Erreur lors de la récupération des notes :', error);
            }
        })

        effect(() => {
            if (this.notesStore.selectedNote()) {
                this.createNote.set(false);
            }
        });
    }

    selectedNoteId() {
        return this.notesStore.selectedNote();
    }

    goBack() {
        this.notesStore.clear();
        this.createNote.set(false);
    }

    createNewNote() {
        this.createNote.set(true);
        this.notesStore.clear();
    }
}
