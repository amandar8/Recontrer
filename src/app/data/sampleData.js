const sampleData = {
  events: [{
      id: '1',
      title: 'Trip to Texas State Capitol',
      date: '2018-10-21T18:00:00',
      category: 'culture',
      description: `Orient yourself to the Capitol Complex through exhibits, film, and information at the Visitors Center. Participate in a free guided tour of the Capitol. Discover the natural beauty of the Capitol Grounds. Buy a souvenir at the Gift Shop in the Capitol Extension or the Visitors Center.`,
      city: 'Austin',
      venue: 'Texas State Capitol Visitors Center, Austin, TX',
      venueLatLng: {
        lat: 30.274655,
        lng: -97.740358
      },
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      attendees: [{
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
      date: '2018-11-18T14:00:00',
      category: 'drinks',
      description: `Austin's craft brewing scene has been booming for the past few years, so you'd be forgiven for feeling a little overwhelmed by all of our fermented offerings. Whether you're in the mood for a Mexican-style lager to compliment your tour of Austin tacos and queso, looking to expand your palate with a sour-mashed saison or trying to keep cool with a refreshing IPA on a hot summer's day, we have you covered. Here is your 2-day insider’s itinerary to Austin’s craft beer trail.`,
      city: 'Austin',
      venue: 'Austin Beer Garden Brewing Co, Lazarus Brewing Company, Black Star Co-op, Austin, TX',
      venueLatLng: {
        lat: 530.245310,
        lng: -97.768930
      },
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      attendees: [{
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
  ]
}

export default sampleData;