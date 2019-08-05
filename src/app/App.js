import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../pages/Landing";
import CreateSession from "../pages/CreateSession";
import Sessions from "../pages/Sessions";
import Groups from "../pages/Groups";
import Members from "../pages/Members";
import Settings from "../pages/Settings";
import mockData from "../pages/__mock__/sessions.json";
import { getFromLocal, setToLocal } from "../services/localStorage";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [sessionCards, setSessionCards] = React.useState(
    getFromLocal("sessionCards") || mockData
  );

  React.useEffect(() => setToLocal("sessionCards", sessionCards), [
    sessionCards
  ]);

  function handleCreateSession(sessionCard) {
    setSessionCards([sessionCard, ...sessionCards]);
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Landing} />
          )} />
          <Route
            exact
            path="/sessions"
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
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
