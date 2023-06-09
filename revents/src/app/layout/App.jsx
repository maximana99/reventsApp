import React from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Sandbox from "../../features/sandbox/Sandbox";
import ModalManager from "../common/modals/ModalManager";
import { ToastContainer } from "react-toastify";
import ErrorComponent from "../common/errors/ErrorComponent";
import AccountPage from "../../features/auth/AccountPage";
import { useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";
import ProfilePage from "../../features/profiles/profilePage/ProfilePage";

function App() {
  const { key } = useLocation();
  const { initialized } = useSelector((state) => state.async);

  if (!initialized) return <LoadingComponent content='Loading App...' />;
  return (
    <Container className='main'>
      <ModalManager />
      <ToastContainer position='bottom-right' theme='colored' hideProgressBar />
      <NavBar />
      <Routes>
        <Route exact='true' path='/' element={<HomePage />} />
        <Route exact='true' path='/events' element={<EventDashboard />} />
        <Route exact='true' path='/sandbox' element={<Sandbox />} />
        <Route path='/events/:id' element={<EventDetailedPage />} />
        <Route path={"/createEvent"} element={<EventForm key={key} />} />
        <Route path={"/manage/:id"} element={<EventForm key={key} />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/profile/:id' element={<ProfilePage />} />
        <Route path='/error' element={<ErrorComponent />} />
      </Routes>
    </Container>
  );
}

export default App;
