import { processServerResponse } from "./res";
import { baseUrl } from "./api";

export async function generateResponse(token) {
  try {
    const res = await fetch(`${baseUrl}/response`, {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
        Authorization: `Bearer ${token}`,
      },
    });
    return processServerResponse(res);
  } catch (error) {
    console.error("Error from generateResponse :", error);
  }
}
