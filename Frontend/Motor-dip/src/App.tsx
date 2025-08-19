import { AddOnsPage } from "./pages/AddOnsPage";
import { CarSelectionPage } from "./pages/CarSelectionPage"
import { DetailsPage } from "./pages/DetailsPage";
import { HomePage } from "./pages/HomePage"
import { PackagePage } from "./pages/PackagePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car" element={<CarSelectionPage />} />
        <Route path="/choose" element={<PackagePage />} />
        <Route path="/book" element={<DetailsPage />} />
        <Route path="/addon" element={<AddOnsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
