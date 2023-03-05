import "bootstrap/dist/css/bootstrap.min.css";
import NumberRandom from "./Components/Number-Random/NumberRandom.jsx";
import QuoteRandom from "./Components/Quote-Random/QuoteRandom.jsx";
import ColorRandom from "./Components/Color-Random/ColorRandom.jsx";
import Questions from "./Components/Questions/Questions.jsx";
import Search from "./Components/Search-Fılter/Search.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layoutt.jsx";
function App() {
  return (
    <div className="App-js">
      <Layout />
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="/search" element={<Search />} />
        <Route path="/quote-random" element={<QuoteRandom />} />
        <Route path="/color-random" element={<ColorRandom />} />
        <Route path="/numberrandom" element={<NumberRandom />} />
      </Routes>
    </div>
  );
}

export default App;
