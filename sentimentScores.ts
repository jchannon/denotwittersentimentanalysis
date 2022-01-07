export interface SentimentDocument {
    id: string;
    score: number;
}

export interface SentimentScores {
    documents: SentimentDocument[];
    errors: any[];
}