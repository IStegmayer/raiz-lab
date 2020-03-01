import React from "react";
import HomePage from "../components/homepage.component";
import Shop from "../components/shop.component";
import Login from "../components/login.component";
import Join from "../components/join.component";

const routes = [
  { name: "HomePage", path: "/", exact: true, main: () => <HomePage /> },
  { name: "Shop", path: "/shop", exact: false, main: () => <Shop /> },
  { name: "Login", path: "/login", exact: true, main: () => <Login /> },
  { name: "Join", path: "/join", exact: true, main: () => <Join /> }
];

export default routes;