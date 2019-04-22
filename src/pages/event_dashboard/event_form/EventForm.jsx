import React, { useReducer, useEffect } from 'react';
import { Button, Segment, Form } from 'semantic-ui-react';

const reducer = (state, action) => ({ ...state, ...action });

const emptyEvent = { event: { title: '', date: '', city: '', venue: '', hostedBy: '' } };

const EventForm = ({ handleCancel, handleCreateEvent, selectedEvent, handleUpdateEvent }) => {
  const [state, setState] = useReducer(reducer, { event: emptyEvent });
  const { event } = state;
  const handleInputChange = ({ target: { value, name } }) => setState({ event: { ...state.event, [name]: value } });

  useEffect(() => {
    if (selectedEvent) setState({ event: selectedEvent });
  }, [selectedEvent]);

  return (
    <Segment>
      <Form>
        <Form.Field>
          <label>Event Title</label>
          <input placeholder="First Name" name="title" onChange={handleInputChange} value={event.title} />
        </Form.Field>
        <Form.Field>
          <label>Event Date</label>
          <input name="date" type="date" placeholder="Event Date" onChange={handleInputChange} value={event.date} />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input name="city" placeholder="City event is taking place" onChange={handleInputChange} value={event.city} />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input
            name="venue"
            placeholder="Enter the Venue of the event"
            onChange={handleInputChange}
            value={event.venue}
          />
        </Form.Field>
        <Form.Field>
          <label>Hosted By</label>
          <input
            name="hostedBy"
            placeholder="Enter the name of person hosting"
            onChange={handleInputChange}
            value={event.hostedBy}
          />
        </Form.Field>
        <Button
          positive
          type="submit"
          onClick={_ => (selectedEvent ? handleUpdateEvent(event) : handleCreateEvent(event))}
        >
          Submit
        </Button>
        <Button onClick={_ => handleCancel(false)} type="button">
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};

export default EventForm;
