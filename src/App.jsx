import "./App.css";

import { HashLoader } from "react-spinners";
import React, { Suspense, lazy } from "react";

function App() {
  const LazyHeader = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(import("./components/header/Header")), 2000)
      )
  );

  const LazyNav = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(import("../src/routes/Nav_routes.jsx")), 3000)
      )
  );

  const LazyFoot = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(import("./components/footer/Foot")), 4000)
      )
  );

  return (
    <>
      <Suspense
        fallback={
          <section
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              margin: "0px",
              padding: "0px",
              backgroundColor: "black",
            }}
          >
            <HashLoader color="#40e0d0" size={120} />
          </section>
        }
      >
        <LazyHeader />
        <LazyNav />
        <LazyFoot />
      </Suspense>
    </>
  );
}

export default App;
