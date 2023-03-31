import { createContext } from "react";

export const AuthContent = createContext({});

function AuthProvider({children}) {
  return (
    <AuthContent.Provider
      value={{ name: "Pedro", email: "pedronunes95@outlook.com" }}
    >
      {children}
    </AuthContent.Provider>
  );
}
export { AuthProvider }