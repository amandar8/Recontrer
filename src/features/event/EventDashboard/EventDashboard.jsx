import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Texas State Capitol',
    date: '2018-08-27',
    category: 'culture',
    description:
      `Orient yourself to the Capitol Complex through exhibits, film, 
      and information at the Visitors Center. Participate in a free 
      guided tour of the Capitol. Discover the natural beauty of the 
      Capitol Grounds. Buy a souvenir at the Gift Shop in the Capitol 
      Extension or the Visitors Center.`,
    city: 'Austin, TX',
    venue: "Texas State Capitol Visitors Center",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Austin Beer Trail',
    date: '2018-08-28',
    category: 'drinks',
    description:
      `Austin's craft brewing scene has been booming for the past few years, 
      so you'd be forgiven for feeling a little overwhelmed by all of our 
      fermented offerings. Whether you're in the mood for a Mexican-style 
      lager to compliment your tour of Austin tacos and queso, looking to 
      expand your palate with a sour-mashed saison or trying to keep cool 
      with a refreshing IPA on a hot summer's day, we have you covered. 
      Here is your 2-day insider’s itinerary to Austin’s craft beer trail.`,
    city: 'Austin, TX',
    venue: 'Austin Beer Garden Brewing Co, Lazarus Brewing Company, Black Star Co-op',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

class EventDashboard extends Component {
  state = {
    events: eventsDashboard,
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    });
  };

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event
        }
      }),
      isOpen: false,
      selectedEvent: null
    });
  };

  handleDeleteEvent = (eventId) => () => {
    const updatedEvents = this.state.events.filter (evt => evt.id !== eventId)
    this.setState({
      events: updatedEvents
    })
  }


  render() {
    const {selectedEvent} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick={this.handleFormOpen} positive content="Create Event"/>
          {this.state.isOpen && (
            <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} handleCancel={this.handleCancel} createEvent={this.handleCreateEvent} />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;