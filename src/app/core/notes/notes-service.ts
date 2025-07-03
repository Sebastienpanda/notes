import {Injectable} from '@angular/core';
import {supabase} from '@core/supabase/supabase-client';

@Injectable({
    providedIn: 'root',
})
export class NotesService {

    async getAllNotesWithTags() {
        const {data, error} = await supabase
            .from('notes')
            .select(`
                *,
                tags (
                    tag
                )
            `);

        if (error) {
            console.error('Erreur lors de la récupération des notes :', error);
            throw error;
        }

        return data
    }

    async getNoteById(noteId: string) {
        const {data, error} = await supabase
            .from('notes')
            .select(`
            *,
            tags (
                tag
            )
        `)
            .eq('id', noteId)
            .single();

        if (error) {
            console.error('Erreur lors de la récupération de la note :', error);
            throw error;
        }

        return data;
    }
}
