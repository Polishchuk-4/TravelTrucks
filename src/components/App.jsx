import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const CampersDetailsPage = lazy(() =>
  import("../pages/CampersDetailsPage/CampersDetailsPage")
);
const CamperFeatures = lazy(() =>
  import("../components/CamperFeatures/CamperFeatures")
);
const CamperReviews = lazy(() =>
  import("../components/CamperReviews/CamperReviews")
);

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CampersDetailsPage />}>
          <Route index element={<Navigate to="features" replace />} />
          <Route path="features" element={<CamperFeatures />} />
          <Route path="reviews" element={<CamperReviews />} />
        </Route>
      </Routes>
    </Layout>
  );
}
