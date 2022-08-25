import react from "react";
import Home from "./Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import { ListsCards } from "./listCarts/ListsCards";

const Routers = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list">
          <Route path=":id">
            <Route path=":name" element={<ListsCards />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Routers;
