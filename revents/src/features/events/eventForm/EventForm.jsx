import React, { useState } from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createEvent, updateEvent } from "../eventActions";

export default function EventForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);
  const [showMessage, setShowMessage] = useState(false);

  function handleFormSubmit() {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: "Bob",
            attendees: [],
            hostPhotoURL: "/assets/user.png",
          })
        );
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the event" : "Create new event"} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event title'
            name='title'
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            name='date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          as={Link}
          to='/events'
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
      {showMessage && (
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "5px",
            marginTop: "10px",
            float: "left",
            fontSize: "12px",
          }}
        >
          Added
        </div>
      )}
    </Segment>
  );
}
