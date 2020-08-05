import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
