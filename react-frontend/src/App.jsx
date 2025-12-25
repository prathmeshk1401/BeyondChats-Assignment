// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArticleGrid from "./components/ArticleGrid";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import ArticleDetail from "./pages/ArticleDetail";
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <div className="viewport">
        <div className="app-shell">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

