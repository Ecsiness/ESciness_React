import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Root/MainLayout";
import AboutPage from "./about/AboutPage";
import ConsulationPage from "./consulation/ConsulationPage";
import ContactPage from "./contact/ContactPage";
import WeblogPage from "./weblog/WeblogPage";
import SingleBlogPage from "./weblog/[Id]/SingleBlogPage";
import SimpleLayout from "./Root/SimpleLayout";
import RegisterPage from "././auth/register/RegisterPage";
import LoginPage from "././auth/login/LoginPage";
import NotFoundPage from "./NotFoundPage";
import HomePage from "./Home/HomePage";
import ServicePage from "./service/ServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/weblog",
        element: <WeblogPage />,
      },
      {
        path: "/weblog/id",
        element: <SingleBlogPage />,
      },
    ],
  },
  {
    path: "/",
    element: <SimpleLayout />,
    children: [
      {
        path: "/consulation",
        element: <ConsulationPage />,
      },
      {
        path: "/auth/register",
        element: <RegisterPage />,
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
