import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const { Routes, Route } = require("react-router-dom");
const { default: Navbar } = require("./components/Navbar");
const { default: Home } = require("./pages/Home");

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
