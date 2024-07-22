import { baseUrl } from "./api";
import { processServerResponse } from "./res";

export const register = async ({ name, email, password, confirmPassword }) => {
  try {
    const res = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    });

    const userData = await processServerResponse(res);

    if (!userData) {
      throw new Error("Error from register");
    }

    return userData;
  } catch (error) {
    console.error("Error from register: ", error);
    throw error;
  }
};

export const authorize = async (email, password) => {
  try {
    const res = await fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const userData = await processServerResponse(res);

    // this contains the token
    // {token: ...}

    if (userData.token) {
      localStorage.setItem("token", userData.token);
      return userData.token;
    } else {
      throw new Error("Error from authorize: ", userData);
    }
  } catch (error) {
    console.error("Error from authorize: ", error);
    throw error;
  }
};

export const checkToken = async () => {
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    try {
      const res = await fetch(`${baseUrl}/users/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
      });

      const userData = await processServerResponse(res);

      if (userData) {
        return userData;
      } else {
        throw new Error("Invalid token");
      }
    } catch (error) {
      console.error("Error while checking token: ", error);
      throw error;
    }
  } else {
    throw new Error("Token not found");
  }
};
