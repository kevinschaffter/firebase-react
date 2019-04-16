import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { EventDashboard } from '../pages';
import { Navbar } from '../components';
import classes from './App.module.scss';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container className={classes.main}>
          <h1>Event List</h1>
          <EventDashboard />
        </Container>
      </>
    );
  }
}

export default App;
