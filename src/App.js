import Loading from "./Loading/Loading";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const BeerList = lazy(() => import("./BeerList/BeerList"));
const BeerItem = lazy(() => import("./BeerItem/BeerItem"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<BeerList />} />
          <Route path="/:itemId" element={<BeerItem />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
