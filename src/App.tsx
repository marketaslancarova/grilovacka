import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./Routes/HomePage";
import MapOverview from "./Routes/MapOverview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map-overview" element={<MapOverview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
