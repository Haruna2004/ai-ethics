// import Header from "./components/Header";
import Header from "./components/global/Header";
import { Report } from "./components/global/Report";
import { Survey } from "./components/global/Survey";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/landing/Home";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import EthicsAnalyzer from "./components/global/EthicsAnalyzer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Survey />} />
        <Route path="/ai-ethics" element={<EthicsAnalyzer />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </>
  );
}

export default App;
