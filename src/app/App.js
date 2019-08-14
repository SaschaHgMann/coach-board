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
import groupData from "../pages/group-data";
import Search from "../pages/Search";

function App() {
  const [sessionCards, setSessionCards] = React.useState(
    getFromLocal("sessionCards") || sessionsData
  );

  const [memberCards] = React.useState(
    getFromLocal("memberCards") || memberData
  );
  const [groups] = React.useState(getFromLocal("groups") || groupData);

  React.useEffect(() => setToLocal("sessionCards", sessionCards), [
    sessionCards
  ]);
  React.useEffect(() => setToLocal("memberCards", memberCards), [memberCards]);
  React.useEffect(() => setToLocal("groups", groups), [groups]);

  function handleCreateSession(session) {
    setSessionCards([session, ...sessionCards]);
  }

  function handleDeleteSession(index) {
    const SessionIndex = sessionCards.findIndex(
      sessionCard => sessionCard.index === index
    );
    const Delete = prompt("Sure to delete? Confirm (yes)");
    if (Delete === "yes") {
      setSessionCards([
        ...sessionCards.slice(0, SessionIndex),
        ...sessionCards.slice(SessionIndex + 1)
      ]);
    }
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
              render={props => (
                <Sessions
                  groups={groups}
                  sessions={sessionCards}
                  onDeleteSession={handleDeleteSession}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/createsession"
              render={props => (
                <CreateSession
                  groups={groups}
                  members={memberCards}
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
            <Route
              exact
              path="/search"
              render={props => (
                <Search
                  sessions={sessionCards}
                  members={memberCards}
                  {...props}
                />
              )}
            />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
