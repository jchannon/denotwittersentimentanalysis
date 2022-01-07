import {applicationConfig} from "./config.ts";
import {promptString} from "./promptString.ts";
import {getTweets, getTwitterUrl} from "./twitter.ts";
import {getAzureCredentials, generateLanguagesData, transformTweetsToAzureLanguageFormat} from "./azureLanguage.ts";
import {combineLanguageAndTweets, getSentimentScores, getAverageScore} from "./azureSentiment.ts";

const twitterHandle: string = await promptString("Enter your name:");

const url = getTwitterUrl(twitterHandle);

const tweets = await getTweets(url, applicationConfig.TwitterApiKey);

const azureDocs = transformTweetsToAzureLanguageFormat(tweets);

const azureInfo = getAzureCredentials(applicationConfig);

const docs = await generateLanguagesData(azureInfo, azureDocs);

const combineddata = combineLanguageAndTweets(tweets, docs);

const sentimentscores = await getSentimentScores(azureInfo, combineddata);

const averageScore = getAverageScore(sentimentscores);

if(averageScore >= 0.75){
    console.log("Your tweets average positive sentiment!");
} else if(averageScore >= 0.45 && averageScore < 0.75){
    console.log("You tweets average neutral sentiment!");
} else if(averageScore < 0.45){
    console.log("You tweets average negative sentiment!");
}