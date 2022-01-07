import {TweetData} from "./tweetData.ts";
import {AzureDocuments} from "./azureDocuments.ts";
import {AzureInfo} from "./azureInfo.ts";
import {SentimentScores} from "./sentimentScores.ts";

export function combineLanguageAndTweets(tweets: TweetData, languages: AzureDocuments): string {

    const combined = tweets.data.map(tweet => {
        const language = languages.documents.find(doc => doc.id === tweet.id);
        if (language !== undefined) {
            const goo = {
                id: tweet.id,
                text: tweet.text,
                language: language.detectedLanguages[0].iso6391Name
            };
            return JSON.stringify(goo);
        }

    });

    const data = combined.join(",");

    return `{"documents": [${data}]}`;
}

export async function getSentimentScores(azureInfo: AzureInfo, tweets: string): Promise<SentimentScores> {
    const [_, sentiment_api_url, subscription_key] = azureInfo;
    const headers = {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": subscription_key
    };
    const body = tweets;
    const response = await fetch(sentiment_api_url, {
        method: "POST",
        headers,
        body
    });
    return await response.json();
}
const average = (numbers: number[]) => sum(numbers) / numbers.length;

const sum = (numbers: number[]) => numbers.reduce((total, aNumber) => total + aNumber, 0);

export function getAverageScore(sentimentscores: SentimentScores): number {
    return average(sentimentscores.documents.map(doc => doc.score));
}