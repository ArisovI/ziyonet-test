import axios from "axios";
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

const bookLoader = async ({ params }: any) => {
  const response = await axios.get(
    `https://api.ziyonet.uz/api/ru/audio/${params.id}`
  );
  return response.data.data.title;
};

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
              crumb: () => (
                <p>Добавить аудиокнигу</p>
              ),
            },
            element: <CreateBook />,
          },
          {
            path: "book/:id",
            element: <Book />,
            loader: bookLoader,
            handle: {
              crumb: (data: string) => {
                return <p>{data}</p>;
              },
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
    ],
  },
]);
