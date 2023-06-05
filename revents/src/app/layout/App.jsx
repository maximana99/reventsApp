import React, { useState } from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen(event) {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <Container className='main'>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/events' element={<EventDashboard />} />
        <Route path='/events/:id' element={<EventDetailedPage />} />
        <Route path='/createEvent' element={<EventForm />} />
      </Routes>
    </Container>
  );
}

export default App;
