import { processServerResponse } from "./res";
import OpenAI from "openai";
import { baseUrl } from "./api";

const API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

export async function getOpenAIResponse(prompt, token) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 100,
      }),
    });
    return processServerResponse(res);
  } catch (error) {
    console.error("Error fetching data from OpenAI API: ", error);
    throw error;
  }
}
