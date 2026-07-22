import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Summary from "./Pages/Summary";
import Create from "./Pages/Create";
import Detail from "./Pages/Detail";
import Edit from "./Pages/Edit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;