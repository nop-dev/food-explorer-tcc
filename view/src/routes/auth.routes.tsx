import { Navigate, Route } from "react-router-dom"; 

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
  return (
			<>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />

				<Route path="*" element={<Navigate to="/signin" />} />
			</>
		);
}
