import Header from "./components/Header";
import { Report } from "./components/Report";
import { Survey } from "./components/Survey";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import "@fontsource/poppins"; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Survey />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </>
  );
}

export default App;
