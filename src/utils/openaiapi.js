import { processServerResponse } from "./res";
import { baseUrl } from "./api";

export async function generateResponse(token) {
  try {
    const res = await fetch(`${baseUrl}/response`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return processServerResponse(res);
  } catch (error) {
    console.error("Error from generateResponse :", error);
  }
}

// window.generateResponse is not a function
// window
//   .generateResponse(localStorage.getItem("jwt"))
//   .then(console.log)
//   .catch(console.error);
