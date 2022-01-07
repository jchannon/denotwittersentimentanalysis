import {TweetData} from "./tweetData.ts";

export function getTwitterUrl(twitterHandle: string): string {
    //Azure Sentiment Analysis can only take 10 docs at a time!
    return `https://api.twitter.com/2/tweets/search/recent?max_results=10&query=from:${twitterHandle}`;
}

export async function getTweets(url: string, token: string): Promise<TweetData> {
    const res = await fetch(url, {headers: {"Authorization": `Bearer ${token}`}});
    return await res.json();
}