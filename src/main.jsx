import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";
import Nav from "./Nav.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Menu.jsx";
import Home from "./Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
