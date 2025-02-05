/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./styles/index.css";

import App from "./App";
import NotFound from "./routes/NotFound";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import SignUp from "./routes/SignUp";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={NotFound} />
    </Router>
  ),
  root!
);
