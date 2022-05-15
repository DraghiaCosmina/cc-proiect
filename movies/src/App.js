import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { WatchList } from "./components/WatchList";
import { Search } from "./components/Search";
import "./App.css";
import { Movies } from "./components/Movies";

function App() {

  return (

    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Movies />}>
        </Route>
        <Route path="/search" element={<Search />}>
        </Route>
        <Route path="/watchlist" element={<WatchList />}>

        </Route>

      </Routes>
    </Router>

  );
}
export default App;