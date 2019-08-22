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
import { getFromLocal, setToLocal } from "../services/localStorage";
import GlobalStyles from "./GlobalStyles";
import Layout from "../components/Layout";
import memberData from "../pages/__mock__/members";
import groupData from "../pages/group-data";
import Search from "../pages/Search";
import coachData from "../pages/__mock__/coaches";
import {
  getSessionCards,
  postSessionCards,
  patchSessionCards,
  deleteSessionCards
} from "../services/services";

function App() {
  const [sessionCards, setSessionCards] = React.useState([]);

  React.useEffect(() => {
    getSessionCards().then(result => setSessionCards(result));
  }, []);

  const [activeCoach, setActiveCoach] = React.useState(
    getFromLocal("activeCoach") || {}
  );
  React.useEffect(() => {
    setToLocal("activeCoach", activeCoach);
  }, [activeCoach]);

  function handleCreateSession(session) {
    postSessionCards(session).then(result =>
      setSessionCards([result, ...sessionCards])
    );
  }

  function updateSessionEdited(data) {
    const index = sessionCards.findIndex(session => session._id === data._id);
    setSessionCards([
      ...sessionCards.slice(0, index),
      data,
      ...sessionCards.slice(index + 1)
    ]);
  }

  function handleEdit(session) {
    patchSessionCards(session, session._id).then(result =>
      updateSessionEdited(result)
    );
  }

  function handleDeleteSession(_id) {
    deleteSessionCards(_id).then(result => {
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
    });
  }
  //////
  // function handleDeleteSession(_id) {
  //   const SessionIndex = sessionCards.findIndex(
  //     sessionCard => sessionCard._id === _id
  //   );
  //   const Confirm = prompt("Sure to delete? Confirm (yes)");
  //   if (Confirm === "yes") {
  //     setSessionCards([
  //       ...sessionCards.slice(0, SessionIndex),
  //       ...sessionCards.slice(SessionIndex + 1)
  //     ]);
  //   }
  // }

  function handleLogin(username) {
    const index = coachData.findIndex(coach => coach.username === username);
    const coach = coachData[index];
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
          {/* {window.location.pathname !== "/" ? (
            <Header title={headTitle} />
          ) : null} */}

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
                    groups={groupData}
                    members={memberData}
                    onPasteSession={handleEdit}
                    sessions={sessionCards}
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
              path="/createsession"
              render={props =>
                activeCoach.username ? (
                  <CreateSession
                    headTitle="New session"
                    formTitle="Add your session"
                    subTitle="Fill in details & check attendees"
                    groups={groupData}
                    members={memberData}
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
                    groups={groupData}
                    sessions={sessionCards}
                    onDeleteSession={handleDeleteSession}
                    {...props}
                    activeCoach={activeCoach}
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
              render={props =>
                activeCoach.username ? (
                  <Members members={memberData} {...props} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route exact path="/settings" component={Settings} />
            <Route
              exact
              path="/search"
              render={props =>
                activeCoach.username ? (
                  <Search
                    sessions={sessionCards}
                    members={memberData}
                    onDeleteSession={handleDeleteSession}
                    onEditSession={handleEdit}
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
