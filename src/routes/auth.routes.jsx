import { Routes, Route } from "react-router-dom";


import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}
