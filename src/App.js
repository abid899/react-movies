import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import NoutfoundPage from "./Pages/NoutfoundPage";
import MoviesDetailPage from "./Pages/MoviesDetailPage";
function App() {
  return (
    <Router basename="/react-movies">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MoviesDetailPage />} />
        <Route path="*" element={<NoutfoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
