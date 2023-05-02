import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Market from "./pages/Market";
import Coin from "./pages/Coin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/market" element={<Market />} />
        <Route path="/market/:id" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
