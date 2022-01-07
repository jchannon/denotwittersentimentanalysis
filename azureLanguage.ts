import {TweetData} from "./tweetData.ts";
import {AppConfig} from "./config.ts";
import {AzureInfo} from "./azureInfo.ts";
import {AzureDocuments} from "./azureDocuments.ts";

export function transformTweetsToAzureLanguageFormat(tweets: TweetData): string {
    return JSON.stringify({ documents: tweets.data.map(tweet => ({ id: tweet.id, text: tweet.text }) )});
}

export function getAzureCredentials(appConfig: AppConfig): AzureInfo {
    const azure_url = appConfig.AzureCognitiveServicesUrl; 
    const language_api_url = `${azure_url}text/analytics/v2.1/languages`;
    const sentiment_api_url = `${azure_url}text/analytics/v2.1/sentiment`;
    const subscription_key = appConfig.AzureApiKey;
    return [language_api_url, sentiment_api_url, subscription_key];
}

export async function generateLanguagesData(azureInfo: AzureInfo, tweets: string): Promise<AzureDocuments> {
    const [language_api_url, _, subscription_key] = azureInfo;
    const headers = {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": subscription_key
    };
    const body = tweets;
    const response = await fetch(language_api_url, {
        method: "POST",
        headers,
        body
    });
    return await response.json();
}