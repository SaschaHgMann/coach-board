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
  //const [activeCoach, setActiveCoach] = React.useState([coaches]);

  React.useEffect(() => setToLocal("sessionCards", sessionCards), [
    sessionCards
  ]);
  React.useEffect(() => setToLocal("memberCards", memberCards), [memberCards]);
  React.useEffect(() => setToLocal("groups", groups), [groups]);

  function handleCreateSession(session) {
    setSessionCards([session, ...sessionCards]);
  }

  function handleEditSession(session) {
    const sessionEdited = sessionCards.map(elem => {
      if (elem._id === session._id) {
        elem = session;
      }
      return elem;
    });
    setSessionCards(sessionEdited);
  }

  function handleDeleteSession(_id) {
    const SessionIndex =
      // sessionCards &&
      sessionCards.findIndex(sessionCard => sessionCard._id === _id);
    console.log(_id);
    const Confirm = prompt("Sure to delete? Confirm (yes)");
    if (Confirm === "yes") {
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
            <Route
              exact
              path="/createsession/edit/:id"
              render={props => (
                <CreateSession
                  headTitle="Edit session"
                  formTitle="Edit your session"
                  subTitle="Correct details of your session"
                  groups={groups}
                  members={memberCards}
                  onCreateSession={handleEditSession}
                  sessions={sessionCards}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/createsession"
              render={props => (
                <CreateSession
                  headTitle="New session"
                  formTitle="Add your session"
                  subTitle="Fill in details"
                  groups={groups}
                  members={memberCards}
                  onCreateSession={handleCreateSession}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/"
              component={Login}
              // onLogin={handleLogin}
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
