import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import useFirestoreDoc from "../../../app/hooks/useFirestoreDoc";
import { listenToEventFromFirestore } from "../../../app/firestore/firestoreService";
import { listenToEvents } from "../eventActions";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default function EventDetailedPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === id)
  );

  const { loading, error } = useSelector((state) => state.async);

  useFirestoreDoc({
    query: () => listenToEventFromFirestore(id),
    data: (event) => dispatch(listenToEvents([event])),
    deps: [id, dispatch],
  });

  const navigate = useNavigate();

  if (loading || (!event && !error))
    return <LoadingComponent content='Loading event...' />;

  if (error) {
    navigate("/error");
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event?.attendees} />
      </Grid.Column>
    </Grid>
  );
}
