import {Component} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Clock, LucideAngularModule, Tag} from 'lucide-angular';

@Component({
    selector: 'app-create-note',
    templateUrl: './create-note.html',
    imports: [
        DatePipe,
        LucideAngularModule
    ]
})

export class CreateNoteComponent {

    protected readonly Clock = Clock;
    protected readonly Tag = Tag;
}
