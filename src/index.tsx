import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/stand/:id",
      element: (
         <div>
            <h1>Hello World</h1>
            <Link to="about">About Us</Link>
         </div>
      ),
   },
   {
      path: "/stands",
      element: <div>Stands</div>,
   },
]);
console.log(process.env.API_URL);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
