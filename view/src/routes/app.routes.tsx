import { Navigate, Route, Routes } from "react-router-dom"; 

import { Home } from "../pages/Home";
import { DishView } from "../pages/DishView";
import { DishArea } from "../pages/DishArea";

export function AppRoutes() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dishes/:id" element={<DishView />}/>
        <Route path="/disharea/:id" element={<DishArea />} />
        <Route path="/disharea/new" element={<DishArea />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </>
  )
}

