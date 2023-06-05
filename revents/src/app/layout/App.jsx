import React from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";

function App() {
  return (
    <Container className='main'>
      <NavBar />
      <Routes>
        <Route exact='true' path='/' element={<HomePage />} />
        <Route exact='true' path='/events' element={<EventDashboard />} />
        <Route path='/events/:id' element={<EventDetailedPage />} />
        <Route path={"/createEvent"} element={<EventForm />} />
        <Route path={"/manage/:id"} element={<EventForm />} />
      </Routes>
    </Container>
  );
}

export default App;
