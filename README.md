# Twitter Sentiment Analysis with Deno

This little app analyzes the sentiment of the last 10 tweets from a Twitter user.

It is built with [Typescript](https://www.typescriptlang.org/) and [Deno](https://deno.land/) so please take a look at the code

##How to run

You'll need a Twitter Dev Account and an Azure account with a Cognitive Services resource setup.

You'll need to setup 3 environment variables:
```
TwitterApiKey
AzureApiKey
AzureCognitiveServicesUrl
```

Once the environment variables are set, you can run the app with:

`deno run --allow-read --allow-env --allow-net mod.ts`

The output you will see, depending on sentiment, possible values being, positive, neutral, negative, is:
```
You tweets average neutral sentiment!
```