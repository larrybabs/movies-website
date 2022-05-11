const { Routes, Route } = require("react-router-dom");
const { default: Navbar } = require("./components/Navbar");
const { default: Home } = require("./pages/Home");


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
