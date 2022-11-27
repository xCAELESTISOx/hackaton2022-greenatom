import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";
import WelcomePage from "./pages/welcome";

import "app/styles/global.scss";
import SurveyPage from "pages/survey";

// Господи Боже, прости меня за весь говнокод, что здесь можно лицезреть.
// Да простит меня Боже за все any, что я совершил

const router = createBrowserRouter([
   {
      path: "/",
      element: <WelcomePage />,
   },
   {
      path: "/home",
      element: <HomePage />,
   },
   {
      path: "/survey/:id",
      element: <SurveyPage />,
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
