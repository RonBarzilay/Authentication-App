import axios from "axios";

const API_KEY = "AIzaSyDrWFs5kI4eSChfkNB39f4KIgvyHi7CC84";

// This is general authenticatation for both
// Sign-in & Sign-up
export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureTocke: true,
  });

  const token = response.data.idToken;

  return token;
}

export function cretaeUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
