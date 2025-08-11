import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./pages/Menu.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import NewOrder from "./pages/NewOrder.jsx";
import SharedLayout from "./layouts/sharedLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <NewOrder />,
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
