import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Loginform from "./Pages/Loginform";
import SignupForm from "./Pages/SignupForm";
import Layout from "./Pages/Layout";
import { AuthProvider } from "./context/AuthContext.jsx";
import User from "./Pages/User.jsx";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Loginform" element={<Loginform />} />
            <Route path="/User" element={<User />} />
            <Route path="/SignupForm" element={<SignupForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
