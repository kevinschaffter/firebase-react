import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({ events }) => (
  <div>
    {events.map(event => (
      <EventListItem key={event.id} event={event} />
    ))}
  </div>
);

export default EventList;
