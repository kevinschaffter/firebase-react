import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({ events, onEventEdit }) => (
  <div>
    {events.map(event => (
      <EventListItem key={event.id} event={event} onEventEdit={onEventEdit} />
    ))}
  </div>
);

export default EventList;
