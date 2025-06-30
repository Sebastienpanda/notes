import {Tag} from '@core/tags/tags-model';

export interface Note {
    id: string;
    title: string;
    content: string;
    updated_at: string;
    is_archived: boolean;
    created_by: string;
    created_at: string;
    updated_by: string;
    tags: Tag[];
}
