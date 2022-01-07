export interface DetectedLanguage {
    name: string;
    iso6391Name: string;
    score: number;
}

export interface Document {
    id: string;
    detectedLanguages: DetectedLanguage[];
}
export interface AzureDocuments {
    documents: Document[];
    errors: any[];
}