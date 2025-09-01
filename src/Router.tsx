import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./Layout/Layout";
import { Pages } from "./Pages/Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: Pages.map((p) => ({
      index: p.exact || p.path === "/" ? true : undefined,
      path: p.exact ? undefined : p.path.replace(/^\//, ""),
      element: p.element,
    })),
  }
]);

const Router = () => <RouterProvider router={router} />;

export default Router;