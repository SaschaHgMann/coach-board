import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
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
import coachData from "../pages/__mock__/coaches";

function App() {
  const [sessionCards, setSessionCards] = React.useState(
    getFromLocal("sessionCards") || sessionsData
  );

  const [memberCards] = React.useState(
    getFromLocal("memberCards") || memberData
  );
  const [groups] = React.useState(getFromLocal("groups") || groupData);

  const [coaches] = React.useState(getFromLocal("coaches") || coachData);

  const [activeCoach, setActiveCoach] = React.useState(
    getFromLocal("activeCoach") || {}
  );

  React.useEffect(() => setToLocal("sessionCards", sessionCards), [
    sessionCards
  ]);

  React.useEffect(() => {
    setToLocal("activeCoach", activeCoach);
  }, [activeCoach]);

  // React.useEffect(() => setToLocal("memberCards", memberCards), [memberCards]);
  // React.useEffect(() => setToLocal("groups", groups), [groups]);
  // React.useEffect(() => setToLocal("coaches", coaches), [coaches]);

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
    const SessionIndex = sessionCards.findIndex(
      sessionCard => sessionCard._id === _id
    );
    const Confirm = prompt("Sure to delete? Confirm (yes)");
    if (Confirm === "yes") {
      setSessionCards([
        ...sessionCards.slice(0, SessionIndex),
        ...sessionCards.slice(SessionIndex + 1)
      ]);
    }
  }

  function handleLogin(username) {
    const index = coaches.findIndex(coach => coach.username === username);
    const coach = coaches[index];
    setActiveCoach(coach);
  }
  // function handleLogout() {
  //   setActiveCoach({});
  // }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Layout>
          <Switch>
            <Route
              exact
              path="/createsession/edit/:id"
              render={props =>
                activeCoach.username ? (
                  <CreateSession
                    headTitle="Edit session"
                    formTitle="Edit your session"
                    subTitle="Correct details of your session"
                    groups={groups}
                    members={memberCards}
                    onPasteSession={handleEditSession}
                    sessions={sessionCards}
                    {...props}
                  />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              exact
              path="/createsession"
              render={props =>
                activeCoach.username ? (
                  <CreateSession
                    headTitle="New session"
                    formTitle="Add your session"
                    subTitle="Fill in details & check attendees"
                    groups={groups}
                    members={memberCards}
                    onPasteSession={handleCreateSession}
                    activeCoach={activeCoach}
                    {...props}
                  />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              exact
              path="/"
              render={props => (
                <Login
                  onLogin={handleLogin}
                  activeCoach={activeCoach}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/sessions"
              render={props =>
                activeCoach.username ? (
                  <Sessions
                    groups={groups}
                    sessions={sessionCards}
                    onDeleteSession={handleDeleteSession}
                    {...props}
                  />
                ) : (
                  <Redirect to="/" />
                )
              }
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
              render={props =>
                activeCoach.username ? (
                  <Search
                    sessions={sessionCards}
                    members={memberCards}
                    onDeleteSession={handleDeleteSession}
                    onEditSession={handleEditSession}
                    {...props}
                  />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
