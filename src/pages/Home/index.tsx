import { Outlet } from "react-router-dom";
import { Footer } from "../../layout/Footer";
import { Header } from "../../layout/Header";
import { Social } from "../../layout/Social";
import { Translite } from "../../layout/Translite";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { AddBook } from "../../components/AddBook";

export const Home = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <AddBook />
      <Outlet />
      <Translite />
      <Social />
      <Footer />
    </div>
  );
};
