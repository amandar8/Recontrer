import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

const sampleEvents = [
  {
    id: '1',
    title: 'Trip to Texas State Capitol',
    date: '2018-08-27T11:00:00+00:00',
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
    date: '2018-08-28T14:00:00+00:00',
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
    events: sampleEvents,
    isOpen: false
  }


  handleFormOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  handleCancel = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={this.state.events}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick={this.handleFormOpen} positive content='Create Event' />
          {this.state.isOpen &&
          <EventForm handleCancel={this.handleCancel} />}
        </Grid.Column>
      </Grid>
    )
  }
}

export default EventDashboard;