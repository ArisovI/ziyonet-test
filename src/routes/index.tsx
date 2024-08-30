import { lazy } from "react";
import { createBrowserRouter, Link } from "react-router-dom";

const Home = lazy(() =>
  import("../pages").then((module) => ({ default: module.Home }))
);

const Login = lazy(() =>
  import("../pages").then((module) => ({ default: module.Login }))
);

const Book = lazy(() =>
  import("../pages").then((module) => ({ default: module.Book }))
);

const CreateBook = lazy(() =>
  import("../pages").then((module) => ({ default: module.CreateBook }))
);

const Content = lazy(() =>
  import("../pages").then((module) => ({ default: module.Content }))
);

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    handle: {
      crumb: () => <Link to="https://ziyonet.uz/ru">Главная</Link>,
    },
    children: [
      {
        path: "/",
        element: <Content />,
        children: [
          {
            path: "/create",
            handle: {
              crumb: () => <Link to="https://ziyonet.uz/ru">Create</Link>,
            },
            element: <CreateBook />,
          },
          {
            path: "book/:id",
            element: <Book />,
            handle: {
              crumb: () => <Link to="https://ziyonet.uz/ru">Book</Link>,
            },
          },
        ],
        handle: {
          crumb: () => <Link to="/">Аудиокниги</Link>,
        },
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "create",
        element: <CreateBook />,
      },
    ],
  },
]);
