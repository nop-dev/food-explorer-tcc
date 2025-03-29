import { Route, Routes } from "react-router-dom"; 

import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";

export function AppRoutes() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn />}/>
      </Routes>
      </>
  )
}

