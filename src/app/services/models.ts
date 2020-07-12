export interface ISearchResponse {
    hits: IPost[];
    page: number;
    nbPages: number;
}

export interface IPost {
    title: string;
    url?: string;
    author: string;
    points: number;
    num_comments: number;
    story_text?: string;
    created_at_i: number;
    objectID: string;
    isHide?: boolean;
}
