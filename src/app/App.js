import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Sessions from "../pages/Sessions";
import CreateSession from "../pages/CreateSession";
import mockData from "../pages/__mock__/sessions.json";

function App() {
  const [sessionCards, setSessionCards] = React.useState(mockData);

  function handleCreateSession(sessionCard) {
    setSessionCards([sessionCard, ...sessionCards]);
  }
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Sessions sessionCards={sessionCards} {...props} />
            )}
          />
          <Route
            exact
            path="/createsession"
            render={props => (
              <CreateSession onCreateSession={handleCreateSession} {...props} />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
