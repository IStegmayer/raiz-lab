import React from "react";
import HomePage from "../components/homepage.component";
import Shop from "../components/shop.component";
import Login from "../components/login.component";
import AuthPage from "../components/authpage.component";

const routes = [
  { name: "HomePage", path: "/", exact: true, main: () => <HomePage /> },
  { name: "Shop", path: "/shop", exact: false, main: () => <Shop /> },
  { name: "AuthPage", path: "/auth", exact: true, main: () => <AuthPage /> },
  { name: "Login", path: "/login", exact: true, main: () => <Login /> }
];

export default routes;