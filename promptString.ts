import {readLines} from "https://deno.land/std@0.119.0/io/buffer.ts";

export async function promptString(question: string): Promise<string> {
    console.log(question);

    for await (const line of readLines(Deno.stdin)) {
        return line;
    }

    return "";
}