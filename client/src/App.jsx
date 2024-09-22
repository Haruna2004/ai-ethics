import Header from "./components/Header";
import { Report } from "./components/Report";
import { Survey } from "./components/Survey";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </>
  );
}

export default App;
