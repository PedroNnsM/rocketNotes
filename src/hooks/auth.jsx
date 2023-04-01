import { createContext, useContext } from "react";

import { api } from "../services/api";

export const AuthContent = createContext({});

function AuthProvider({ children }) {

  async function signIn({ email, password }) {

    try{
      const response = await api.post("/sessions", { email, password });
      console.log(response)
    } catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possivel acessar")
      }
    }
  }

  return (
    <AuthContent.Provider
      value={{ name: "Pedro Nunes", email: "pedronunes95@outlook.com" }}
    >
      {children}
    </AuthContent.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContent);

  return context;
}

export { AuthProvider, useAuth };
