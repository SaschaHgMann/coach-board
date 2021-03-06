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
import memberData from "../pages/mock/members";
import groupData from "../pages/mock/groups";
import Search from "../pages/Search";
import coachData from "../pages/mock/coaches";
import {
  getSessionCards,
  postSessionCards,
  patchSessionCards,
  deleteSessionCards,
  getMemberCards,
  postMemberCards
} from "../services/services";

function App() {
  const [activeCoach, setActiveCoach] = React.useState(
    getFromLocal("activeCoach") || {}
  );
  React.useEffect(() => {
    setToLocal("activeCoach", activeCoach);
  }, [activeCoach]);


  const [sessionCards, setSessionCards] = React.useState([]);

  React.useEffect(() => {
    getSessionCards().then(result => setSessionCards(result));
  }, []);

  const [memberCards, setMemberCards] = React.useState([]);

  React.useEffect(() => {
    getMemberCards().then(result => setMemberCards(result));
  }, []);


  // const [memberCards, setMemberCards] = React.useState(
  //   getFromLocal("memberCards") || memberData
  // );

  // React.useEffect(() => {
  //   setToLocal("memberCards", memberCards);
  // }, [memberCards]);

  // function handleCreateMember(member) {
  //   setMemberCards([member, ...memberCards]);
  // }

  function handleCreateMember(member) {
    postMemberCards(member).then(result =>
      setMemberCards([result, ...memberCards])
    );
  }

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

  function handleDeleteSession(id) {
    const Confirm = window.confirm("Sure to delete?");
    if (Confirm === true) {
      deleteSessionCards(id).then(() => {
        const Index = sessionCards.findIndex(session => session._id === id);
        setSessionCards([
          ...sessionCards.splice(0, Index),
          ...sessionCards.splice(Index + 1)
        ]);
      });
    }
  }

  function handleLogin(username) {
    const index = coachData.findIndex(coach => coach.username === username);
    const coach = coachData[index];
    setActiveCoach(coach);
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
            <Route
              exact
              path="/groups"
              render={props =>
                activeCoach.username ? (
                  <Groups members={memberCards} {...props} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              exact
              path="/members"
              render={props =>
                activeCoach.username ? (
                  <Members members={memberCards} {...props} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              exact
              path="/settings"
              render={props =>
                activeCoach.username ? (
                  <Settings
                    groups={groupData}
                    onPasteMember={handleCreateMember}
                    {...props}
                  />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              exact
              path="/search"
              render={props =>
                activeCoach.username ? (
                  <Search
                    sessions={sessionCards}
                    members={memberCards}
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
