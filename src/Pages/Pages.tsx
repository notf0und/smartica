import Contact from "./Contact";
import Home from "./Home";

export const Pages = [
  { path: "/", label: "Home", element: <Home />, exact: true },
  { path: "/contact", label: "Contact", element: <Contact /> },

];