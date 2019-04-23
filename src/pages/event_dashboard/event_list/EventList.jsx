import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({ events, onEventEdit, deleteEvent }) => (
  <div>
    {events.map(event => (
      <EventListItem key={event.id} event={event} onEventEdit={onEventEdit} deleteEvent={deleteEvent} />
    ))}
  </div>
);

export default EventList;
