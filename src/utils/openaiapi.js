import { processServerResponse } from "./res";

export async function getOpenAIResponse() {
  try {
    const Api = fetch(`https://api.openai.com/v1/completions`);
    processServerResponse();
    return Api;
  } catch (error) {
    console.error(`Error from getOpenAIResponse :`, error);
  }
}

export async function parseOpenAIResponse(token) {
  try {
    const res = await fetch(`https://api.openai.com/v1/completions`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "",
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      }),
    });
    console.log(res);
    return processServerResponse(res);
  } catch (error) {
    console.error("Error from parseOpenAIResponse :", error);
  }
}

// export async function getOpenAIResponse(prompt, token) {
//   try {
//     const res = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         prompt: prompt,
//         max_tokens: 100,
//       }),
//     });
//     return processServerResponse(res);
//   } catch (error) {
//     console.error("Error fetching data from OpenAI API: ", error);
//     throw error;
//   }
// }
