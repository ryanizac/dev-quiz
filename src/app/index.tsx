import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JoinAServerPage, QuestionPage, WaitingForServerPage } from "../pages";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={JoinAServerPage} />
        <Route path="/waiting" Component={WaitingForServerPage} />
        <Route path="/question" Component={QuestionPage} />
      </Routes>
    </BrowserRouter>
  );
}
