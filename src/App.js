import React from "react";
import List from "./Components/List";
import Movies from "./Components/Movies/Movies";
import Action from "./Components/Action/Action.js";
import Comedy from "./Components/Comedy/Comedy";
import Thriller from "./Components/Thriller/Thriller";
import Pagination from "./Components/Pagination/Pagination";
import {Routes,Route } from "react-router-dom"

function App() {
  return (
    <div>
      <List />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="Action" element={<Action />} />
        <Route path="Comedy" element={<Comedy />} />
        <Route path="Thriller" element={<Thriller />} />
      </Routes>
    <Pagination />
    </div>
  );
}

export default App;
