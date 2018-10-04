import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';

const event = {
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
}

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  )
}

export default EventDetailedPage;