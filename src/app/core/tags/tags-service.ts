import {Injectable} from '@angular/core';
import {supabase} from '@core/supabase/supabase-client';
import {Tag} from '@core/tags/tags-model';

@Injectable({providedIn: 'root'})
export class TagsService {
    async getAllTags(): Promise<Tag[]> {
        const {data, error} = await supabase
            .from('tags')
            .select('*');

        if (error) {
            console.error('Erreur lors de la récupération des tags :', error);
            throw error;
        }

        return Array.from(
            new Map(data.map(tag => [tag.tag, tag])).values()
        );
    }
}
