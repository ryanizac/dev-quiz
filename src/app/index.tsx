import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  JoinAServerPage,
  QuestionPage,
  RankingPage,
  WaitingForServerPage,
} from "../pages";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={JoinAServerPage} />
        <Route path="/waiting" Component={WaitingForServerPage} />
        <Route path="/question" Component={QuestionPage} />
        <Route path="/ranking" Component={RankingPage} />
      </Routes>
    </BrowserRouter>
  );
}
