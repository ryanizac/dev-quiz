import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JoinAServerPage } from "../pages";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={JoinAServerPage} />
      </Routes>
    </BrowserRouter>
  );
}
