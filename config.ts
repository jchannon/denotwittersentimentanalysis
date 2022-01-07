import {config} from "https://deno.land/x/dotenv/mod.ts";

const dotenvConfig = config({safe: true, export: true});

export interface AppConfig {
    TwitterApiKey: string;
    AzureApiKey: string;
    AzureCognitiveServicesUrl: string;
}

export const applicationConfig: AppConfig = {
    TwitterApiKey: Deno.env.get("TwitterApiKey") || dotenvConfig.TwitterApiKey,
    AzureApiKey: Deno.env.get("AzureApiKey") || dotenvConfig.AzureApiKey,
    AzureCognitiveServicesUrl: Deno.env.get("AzureCognitiveServicesUrl") || dotenvConfig.AzureCognitiveServicesUrl,
};
