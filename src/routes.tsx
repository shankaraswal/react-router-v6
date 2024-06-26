import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Layout } from "./pages/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import UserDetailPage from "./pages/UserDetailPage.tsx";

const routeConfig = {
  path: "/",
  element: <Layout />,
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
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/user/:userId",
      element: <UserDetailPage />,
    },
  ],
};

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {routeConfig.children.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
