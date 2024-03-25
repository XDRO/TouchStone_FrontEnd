import { processServerResponse } from "./res";

// come back to after deploying server
export const baseUrl = "http://localhost:3001";

export async function getItems() {
  const res = await fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  //   implement preLoader until res is received
  return processServerResponse(res);
}

export async function postItems(values, token) {
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  });
  return processServerResponse(res);
}
