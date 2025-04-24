import {
  SignIn,
  SignUp,
  // RedirectToSignIn
} from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";

<Routes>
  <Route path="/sign-in/*" element={<SignIn />} />
  <Route path="/sign-up/*" element={<SignUp />} />
  {/* otras rutas */}
</Routes>

 function LoginPage() {
  return (
    <div>
      <h2>Iniciar sesión</h2>
      <SignIn />
    </div>
  );
}
export default LoginPage
