import { Nav } from "./part1/components/Nav";
import { CardDetails } from "./part1/components/CardDetails";
import { Body } from "./part1/components/Body";
import { Checkout } from "./part1/components/Checkout";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/:id" element={<CardDetails />}>
          {" "}
        </Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
}

export default App;

