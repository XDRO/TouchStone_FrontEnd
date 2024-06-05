import { processServerResponse } from "./res";

// come back to after deploying server
// export const baseUrl = "http://localhost:3001";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.touchstone.ai.zanity.net"
    : "http://localhost:3001";

export async function getItems() {
  const res = await fetch(`${baseUrl}/message`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  //   implement preLoader until res is received
  return processServerResponse(res);
}

export async function postItems(values, token) {
  const res = await fetch(`${baseUrl}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  });
  return processServerResponse(res);
}
