import { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  // useState for set and get
  // get by authToken, set by setAuthToken
  const [authToken, setAuthToken] = useState();

  // set token methode
  function authenticate(token) {
    setAuthToken(token);
    // To keep user login
    AsyncStorage.setItem("token", token);
  }

  function logout() {
    setAuthToken(null);
    // To remove user login
    AsyncStorage.removeItem("token");
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
