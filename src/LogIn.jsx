import {
  SignIn,
  SignUp,
  // RedirectToSignIn
} from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import Header from './components/header';
import './index.css';


<Routes>
  <Route path="/sign-in/*" element={<SignIn />} />
  <Route path="/sign-up/*" element={<SignUp />} />
  {/* otras rutas */}
</Routes>

 function LoginPage() {
  return (
    <>
    <Header></Header>
    <div id="contenido_login">
      <h2>Iniciar sesión</h2>
      <SignIn />
    </div>
    </>
    
  );
}
export default LoginPage
