import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants';

const initialState = [
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

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)]
}

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ]
}

export const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)]
}

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
})