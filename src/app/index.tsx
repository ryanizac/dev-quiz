import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={() => <div>Join a server</div>} />
      </Routes>
    </BrowserRouter>
  );
}
