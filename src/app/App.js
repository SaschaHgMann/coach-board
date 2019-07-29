import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Sessions from "../pages/Sessions";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route>
            <Route path="/" render={props => <Sessions {...props} />} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
