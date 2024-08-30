import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "../routes";

export const App = () => {
  return (
    <React.Suspense fallback={<h1>LOADING</h1>}>
      <RouterProvider router={AppRouter} />
    </React.Suspense>
  );
};
