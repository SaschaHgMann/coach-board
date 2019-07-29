import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Sessions from "../pages/Sessions";
import CreateSession from "../pages/CreateSession";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route>
            <Route path="/" exact component={Sessions} />
            <Route path="/createSession" exact component={CreateSession} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
