import { Navigate, Route, Routes } from "react-router-dom"; 

import { Home } from "../pages/Home";
import { DishView } from "../pages/DishView";

export function AppRoutes() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dishes" element={<DishView />}/>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </>
  )
}

