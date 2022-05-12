import { AuthContextProvider } from "./context/AuthContext";

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
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
