// import { baseUrl } from "./api";
// import { processServerResponse } from "./res";

// export const register = async ({ name, email, password, confirmPassword }) => {
//   try {
//     const res = await fetch(`${baseUrl}/signup`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, password, confirmPassword }),
//     });

//     const userData = await processServerResponse(res);

//     console.log("Full response from server:", res);
//     console.log("User data received after registration:", userData);

//     if (!userData) {
//       throw new Error("Error from register");
//     }

//     return userData;
//   } catch (error) {
//     console.error("Error from register: ", error);
//     throw error;
//   }
// };
