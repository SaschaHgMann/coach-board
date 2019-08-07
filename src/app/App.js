import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../pages/Landing";
import CreateSession from "../pages/CreateSession";
import Sessions from "../pages/Sessions";
import Groups from "../pages/Groups";
import Members from "../pages/Members";
import Settings from "../pages/Settings";
import sessionsData from "../pages/__mock__/sessions.json";
import { getFromLocal, setToLocal } from "../services/localStorage";
import GlobalStyles from "./GlobalStyles";
import Layout from "../components/Layout";
import memberData from "../pages/__mock__/members";

function App() {
  const [sessionCards, setSessionCards] = React.useState(
    getFromLocal("sessionCards") || sessionsData
  );
  const [memberCards] = React.useState(
    getFromLocal("memberCards") || memberData
  );

  React.useEffect(() => setToLocal("sessionCards", sessionCards), [
    sessionCards
  ]);
  React.useEffect(() => setToLocal("memberCards", memberCards), [memberCards]);

  function handleCreateSession(sessionCard) {
    setSessionCards([sessionCard, ...sessionCards]);
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Layout>
          <Switch>
            <Route exact path="/" component={Landing} />
            )} />
            <Route
              exact
              path="/sessions"
              render={props => <Sessions sessions={sessionCards} {...props} />}
            />
            <Route
              exact
              path="/createsession"
              render={props => (
                <CreateSession
                  onCreateSession={handleCreateSession}
                  {...props}
                />
              )}
            />
            <Route exact path="/groups" component={Groups} />
            <Route
              exact
              path="/members"
              render={props => <Members members={memberCards} {...props} />}
            />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
