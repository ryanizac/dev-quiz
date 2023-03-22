import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JoinAServerPage, WaitingForServerPage } from "../pages";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={JoinAServerPage} />
        <Route path="/waiting" Component={WaitingForServerPage} />
      </Routes>
    </BrowserRouter>
  );
}
