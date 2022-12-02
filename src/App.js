import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Home from "./components/Page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Page/Search";
import { SkeletonTheme } from "react-loading-skeleton";
import React from "react";

const Home = React.lazy(() => import ('./components/Page/Home'));



function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#202020" highlightColor="#880000">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}

export default App;
