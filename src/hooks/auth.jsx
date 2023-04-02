import { createContext } from "react";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{ name: "Pedro", email: "pedronunes95@outlo" }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
