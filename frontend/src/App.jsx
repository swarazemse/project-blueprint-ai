import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/history">History</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analysis-history" element={<HistoryPage />} />
      </Routes>
    </>
  );
}

export default App;