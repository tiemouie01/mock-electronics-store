import App from "./routes/App";
import Home from "./routes/Home";
import Shop from "./routes/shop/Shop";
import ErrorPage from "./ErrorPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
];
