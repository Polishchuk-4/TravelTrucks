import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";

export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/catalog" element={<HomePage />} />
      <Route path="/catalog/:id" element={<HomePage />} />
    </Routes>
  );
}
