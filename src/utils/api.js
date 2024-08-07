import { processServerResponse } from "./res";

// come back to after deploying server
// export const baseUrl = "http://localhost:3001";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.touchstone.ai.zanity.net"
    : "http://localhost:3001";

export async function getChats(id, token) {
  const res = await fetch(`${baseUrl}/message/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return processServerResponse(res);
}

export async function postMessage(values, token) {
  console.log(token, "token from postMessage");
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

export async function deleteMessage(id, token) {
  const res = await fetch(`${baseUrl}/message/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return processServerResponse(res);
}
