import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
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
import coaches from "../pages/__mock__/coaches";

function App() {
  const [sessionCards, setSessionCards] = React.useState(
    getFromLocal("sessionCards") || sessionsData
  );

  const [memberCards] = React.useState(
    getFromLocal("memberCards") || memberData
  );
  const [groups] = React.useState(getFromLocal("groups") || groupData);
  const [activeCoach, setActiveCoach] = React.useState([coaches]);

  React.useEffect(() => setToLocal("sessionCards", sessionCards), [
    sessionCards
  ]);
  React.useEffect(() => setToLocal("memberCards", memberCards), [memberCards]);
  React.useEffect(() => setToLocal("groups", groups), [groups]);

  function handleCreateSession(session) {
    setSessionCards([session, ...sessionCards]);
  }

  function handleDeleteSession(_id) {
    const SessionIndex = sessionCards.findIndex(
      sessionCard => sessionCard._id === _id
    );
    const Delete = prompt("Sure to delete? Confirm (yes)");
    if (Delete === "yes") {
      setSessionCards([
        ...sessionCards.splice(0, SessionIndex),
        ...sessionCards.splice(SessionIndex + 1)
      ]);
    }
  }

  // function handleEditSession(index) {
  //   const SessionIndex = sessionCards.findIndex(
  //     sessionCard => sessionCard.index === index
  //   );
  //   console.log(SessionIndex);
  // }

  function handleLogin() {
    return;
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              component={Login}
              onLogin={handleLogin}
              coaches={coaches}
            />
            )} />
            <Route
              exact
              path="/sessions"
              render={props => (
                <Sessions
                  groups={groups}
                  sessions={sessionCards}
                  onDeleteSession={handleDeleteSession}
                  // onEditSession={handleEditSession}
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
                  onDeleteSession={handleDeleteSession}
                  // onEditSession={handleEditSession}
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
