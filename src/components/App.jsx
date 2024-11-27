import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import Layout from "./Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/catalog" element={<HomePage />} />
        <Route path="/catalog/:id" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
