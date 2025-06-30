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
}
