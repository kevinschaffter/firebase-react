import React from 'react';
import { List, Image } from 'semantic-ui-react';

const EventList = ({ attendee: { photoURL } }) => (
  <List.Item>
    <Image size="mini" as="a" circular src={photoURL} />
  </List.Item>
);

export default EventList;
