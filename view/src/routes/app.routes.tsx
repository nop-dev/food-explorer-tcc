import { Navigate, Route, Routes } from "react-router-dom"; 

import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </>
  )
}

