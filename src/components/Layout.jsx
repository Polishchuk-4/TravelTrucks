import AppBar from "./AppBar/AppBar";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: "100vh", margin: "0 auto" }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
