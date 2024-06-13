import { processServerResponse } from "./res";
import { baseUrl } from "./api";

/**
 * Function to generate a response from the server
 * @param {string} token - The user's authentication token
 * @returns {Promise<Object>} - The server response
 */

export async function generateResponse(token) {
  try {
    const res = await fetch(`${baseUrl}/response`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return processServerResponse(res);
  } catch (error) {
    console.error("Error from generateResponse :", error);
  }
}

/**
 * Function to summarize text using the server's summarizer endpoint
 * @param {Object} values - The data to be sent in the request body
 * @param {string} token - The user's authentication token
 * @returns {Promise<Object>} - The server response
 */
// use when you implement summary on back end
// export async function summarizeText(values, token) {
//   try {
//     const res = await fetch(`${baseUrl}/summarizer`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(values),
//     });
//     return processServerResponse(res);
//   } catch (error) {
//     console.error("Error from summerizeText :", error);
//   }
// }
