
import { DanceStyle, TeamMember, Milestone } from './types';

export const STANDARD_DANCES: DanceStyle[] = [
  {
    id: 'waltz',
    name: 'Slow Waltz',
    description: 'The "Mother of all Dances," the Slow Waltz is characterized by its romantic, swaying movements and rise and fall. It requires immense control, balance, and a seamless connection between partners to create a floating sensation across the floor.',
    technicalFocus: ['Swing and Sway', 'Rise and Fall', 'Footwork (Heel leads)', 'Body Contact'],
    emotion: 'Romantic, Sentimental, Majestic',
    image: 'https://picsum.photos/800/600?grayscale&blur=1',
    gallery: [
      'sandbox:/mnt/data/IMG_3340.png',
      'https://picsum.photos/400/300?random=104&grayscale',
      'https://picsum.photos/400/300?random=105&grayscale',
      'https://picsum.photos/400/300?random=106&grayscale'
    ],
    totalXs: 125,
    competitionHistory: [
      { competitionName: 'Autumn Gala 2022', year: 2022, score: 45 },
      { competitionName: 'National Open 2023', year: 2023, score: 40 },
      { competitionName: 'Regional Classic 2024', year: 2024, score: 40 },
    ]
  },
  {
    id: 'tango',
    name: 'Tango',
    description: 'Originating from Argentina but stylized for the ballroom, Tango is dramatic, sharp, and staccato. Unlike other standard dances, it has no swing or sway, relying instead on stealthy movement and sharp head snaps.',
    technicalFocus: ['Staccato Action', 'Compact Frame', 'Sharp Head Turns', 'Walk Technique'],
    emotion: 'Passionate, Aggressive, Intense',
    image: 'https://picsum.photos/800/601?grayscale&blur=1',
    gallery: [
      'https://picsum.photos/400/300?random=4&grayscale',
      'https://picsum.photos/400/300?random=5&grayscale',
      'https://picsum.photos/400/300?random=6&grayscale',
      'https://picsum.photos/400/300?random=106&grayscale'
    ],
    totalXs: 110,
    competitionHistory: [
      { competitionName: 'Autumn Gala 2022', year: 2022, score: 35 },
      { competitionName: 'National Open 2023', year: 2023, score: 35 },
      { competitionName: 'Regional Classic 2024', year: 2024, score: 40 },
    ]
  },
  {
    id: 'viennese',
    name: 'Viennese Waltz',
    description: 'The original waltz, danced at a breathless tempo. It involves continuous rotation to the left and right. The challenge lies in maintaining stamina and elegance while moving at high speeds.',
    technicalFocus: ['Continuous Rotation', 'Stamina', 'Consistency', 'Musicality'],
    emotion: 'Exhilarating, Dizzying, Classic',
    image: 'https://picsum.photos/800/602?grayscale&blur=1',
    gallery: [
      'https://picsum.photos/400/300?random=7&grayscale',
      'https://picsum.photos/400/300?random=8&grayscale',
      'https://picsum.photos/400/300?random=9&grayscale',
      'https://picsum.photos/400/300?random=109&grayscale'
    ],
    totalXs: 130,
    competitionHistory: [
      { competitionName: 'Autumn Gala 2022', year: 2022, score: 40 },
      { competitionName: 'National Open 2023', year: 2023, score: 45 },
      { competitionName: 'Regional Classic 2024', year: 2024, score: 45 },
    ]
  },
  {
    id: 'foxtrot',
    name: 'Slow Foxtrot',
    description: 'Often considered the most difficult standard dance, the Foxtrot is smooth, continuous, and progressive. It mimics the carefree walk of a stroll in the park but requires high technical precision to look effortless.',
    technicalFocus: ['Smoothness', 'Feather Finishes', 'Floorcraft', 'Swing'],
    emotion: 'Classy, Jazzy, Smooth',
    image: 'https://picsum.photos/800/603?grayscale&blur=1',
    gallery: [
      'https://picsum.photos/400/300?random=10&grayscale',
      'https://picsum.photos/400/300?random=11&grayscale',
      'https://picsum.photos/400/300?random=12&grayscale',
      'https://picsum.photos/400/300?random=112&grayscale'
    ],
    totalXs: 100,
    competitionHistory: [
      { competitionName: 'Autumn Gala 2022', year: 2022, score: 30 },
      { competitionName: 'National Open 2023', year: 2023, score: 35 },
      { competitionName: 'Regional Classic 2024', year: 2024, score: 35 },
    ]
  },
  {
    id: 'quickstep',
    name: 'Quickstep',
    description: 'A fast, light-hearted dance that combines the smooth flow of Foxtrot with hops, runs, and intricate footwork. It is dynamic and energetic, often the finale of a Standard competition.',
    technicalFocus: ['Speed', 'Agility', 'Syncopation', 'Lightness'],
    emotion: 'Joyful, Bubbly, Energetic',
    image: 'https://picsum.photos/800/604?grayscale&blur=1',
    gallery: [
      'https://picsum.photos/400/300?random=13&grayscale',
      'https://picsum.photos/400/300?random=14&grayscale',
      'https://picsum.photos/400/300?random=15&grayscale',
      'https://picsum.photos/400/300?random=115&grayscale'
    ],
    totalXs: 140,
    competitionHistory: [
      { competitionName: 'Autumn Gala 2022', year: 2022, score: 50 },
      { competitionName: 'National Open 2023', year: 2023, score: 45 },
      { competitionName: 'Regional Classic 2024', year: 2024, score: 45 },
    ]
  }
];

export const LATIN_DANCES: DanceStyle[] = [
  {
    id: 'chacha',
    name: 'Cha-Cha-Cha',
    description: 'A cheeky, flirtatious dance derived from the Mambo. It emphasizes rhythmic syncopation and sharp leg actions. The interaction between partners is playful and teasing.',
    technicalFocus: ['Cuban Motion', 'Straight Legs', 'Sharpness', 'Polyrhythm'],
    emotion: 'Cheeky, Playful, Flirtatious',
    image: 'https://picsum.photos/800/605?grayscale&blur=1',
    gallery: [
      'https://picsum.photos/400/300?random=16',
      'https://picsum.photos/400/300?random=17',
      'https://picsum.photos/400/300?random=18',
      'https://picsum.photos/400/300?random=116'
    ],
    totalXs: 115,
    competitionHistory: [
      { competitionName: 'Spring Latin Cup 2023', year: 2023, score: 38 },
      { competitionName: 'Summer Vibes 2023', year: 2023, score: 40 },
    ]
  },
  {
    id: 'samba',
    name: 'Samba',
    description: 'The carnival dance of Brazil. It features a distinctive "bounce" action and involves intricate rhythms. Samba is festive, requiring flexibility in the hips and knees.',
    technicalFocus: ['Samba Bounce', 'Pelvic Action', 'Rhythmic Variety', 'Volume'],
    emotion: 'Festive, Carnival, Rhythmic',
    image: 'https://picsum.photos/800/606?grayscale&blur=1',
    gallery: [
      'https://picsum.photos/400/300?random=19',
      'https://picsum.photos/400/300?random=20',
      'https://picsum.photos/400/300?random=21',
      'https://picsum.photos/400/300?random=119'
    ],
    totalXs: 120,
    competitionHistory: [
      { competitionName: 'Spring Latin Cup 2023', year: 2023, score: 40 },
      { competitionName: 'Summer Vibes 2023', year: 2023, score: 42 },
    ]
  },
  {
    id: 'rumba',
    name: 'Rumba',
    description: 'The "Dance of Love." Rumba is slow, sensual, and tells a story of passion. It requires deep settling into the hips and expressive arm movements to convey emotion.',
    technicalFocus: ['Hip Settling', 'Leg Line Extension', 'Connection', 'Storytelling'],
    emotion: 'Sensual, Romantic, Intense',
    image: 'https://picsum.photos/800/607?grayscale&blur=1',
    gallery: [
      'https://picsum.photos/400/300?random=22',
      'https://picsum.photos/400/300?random=23',
      'https://picsum.photos/400/300?random=24',
      'https://picsum.photos/400/300?random=122'
    ],
    totalXs: 135,
    competitionHistory: [
      { competitionName: 'Spring Latin Cup 2023', year: 2023, score: 45 },
      { competitionName: 'Summer Vibes 2023', year: 2023, score: 45 },
    ]
  },
  {
    id: 'paso',
    name: 'Paso Doble',
    description: 'Modeled after the Spanish bullfight. The leader plays the Matador, and the follower acts as the Cape (or sometimes the Bull). It is dramatic, marching, and theatrically postured.',
    technicalFocus: ['Spanish Line', 'Marching Rhythm', 'Appel', 'Flamenco Arms'],
    emotion: 'Dramatic, Arrogant, Powerful',
    image: 'https://picsum.photos/800/608?grayscale&blur=1',
    gallery: [
      'https://picsum.photos/400/300?random=25',
      'https://picsum.photos/400/300?random=26',
      'https://picsum.photos/400/300?random=27',
      'https://picsum.photos/400/300?random=125'
    ],
    totalXs: 105,
    competitionHistory: [
      { competitionName: 'Spring Latin Cup 2023', year: 2023, score: 35 },
      { competitionName: 'Summer Vibes 2023', year: 2023, score: 38 },
    ]
  },
  {
    id: 'jive',
    name: 'Jive',
    description: 'The fastest Latin dance, influenced by Swing and Rock & Roll. It involves high kicks, flicks, and plenty of energy. Stamina is key in this final dance.',
    technicalFocus: ['Kick and Flick', 'Retraction', 'Bounce', 'Stamina'],
    emotion: 'Fun, Energetic, Swingy',
    image: 'https://picsum.photos/800/609?grayscale&blur=1',
    gallery: [
      'https://picsum.photos/400/300?random=28',
      'https://picsum.photos/400/300?random=29',
      'https://picsum.photos/400/300?random=30',
      'https://picsum.photos/400/300?random=128'
    ],
    totalXs: 128,
    competitionHistory: [
      { competitionName: 'Spring Latin Cup 2023', year: 2023, score: 42 },
      { competitionName: 'Summer Vibes 2023', year: 2023, score: 43 },
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'coach1',
    name: 'Elena & Victor',
    role: 'Head Coaches',
    bio: 'Former World Finalists with over 20 years of teaching experience. They specialize in biomechanics and competitive mindset.',
    image: 'https://picsum.photos/400/500?grayscale'
  },
  {
    id: 'partner',
    name: 'Alexander Volkov',
    role: 'Dance Partner',
    bio: 'My partner in crime on the dance floor since 2019. Together we have secured titles in 3 national championships.',
    image: 'https://picsum.photos/400/501?grayscale'
  }
];

export const TIMELINE: Milestone[] = [
  { year: '2015', title: 'The Beginning', description: 'Took my first steps at TK Elegance. Fell in love with the Waltz immediately.' },
  { year: '2018', title: 'First Competition', description: 'Competed in the Bronze category, winning 2nd place in Latin.' },
  { year: '2020', title: 'Dedicated Partnership', description: 'Formed a permanent partnership focused on the 10-Dance discipline.' },
  { year: '2023', title: 'National Finalists', description: 'Reached the finals in the National Amateur Standard Championship.' },
];
