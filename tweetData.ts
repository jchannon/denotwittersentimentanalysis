interface Tweet {
    id: string;
    text: string;
}

interface Meta {
    newest_id: string;
    oldest_id: string;
    result_count: number;
}

export interface TweetData {
    data: Tweet[];
    meta: Meta;
}