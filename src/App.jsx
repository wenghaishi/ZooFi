import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Market from "./pages/Market";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
