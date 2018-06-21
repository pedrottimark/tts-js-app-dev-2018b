'use strict';

// Given input data as array of objects for plants:

const plants = [
  {
    symbol: 'HEMER',
    src: 'hemer_001_shp',
    scientificName: 'Hemerocallis',
    authority: 'L.',
    commonName: 'daylily',
    description: 'Individual daylily flowers last only one day. The total blooming time of a well-established clump may be 30 to 40 days.'
  },
  {
    symbol: 'RUHI2',
    src: 'ruhi2_002_shp',
    scientificName: 'Rudbeckia hirta',
    authority: 'L.',
    commonName: 'blackeyed Susan',
    description: 'Black-eyed Susan has yellow ray flowers and dark brown spherical centers. The seed is very small.'
  },
  {
    symbol: 'PHDR',
    src: 'phdr_1h',
    scientificName: 'Phlox drummondii',
    authority: 'Hook.',
    commonName: 'annual phlox',
    description: 'Phlox are highly attractive to butterflies. They bloom in the cool color range: from white to pink, rose, red, magenta, purple, and blue.'
  },
  {
    symbol: 'IREN',
    src: 'iren_002_shp',
    scientificName: 'Iris ensata',
    authority: 'Thunb.',
    commonName: 'Japanese iris',
    description: 'Iris are dependable, long-lived perennials. Japanese iris grow in wet soil and have the most spectacular flowers of all the iris.'
  },
  {
    symbol: 'MAGR4',
    src: 'magr4_001_shp',
    scientificName: 'Magnolia grandiflora',
    authority: 'L.',
    commonName: 'southern magnolia',
    description: 'Magnolia has showy, fragrant white, pink, or purple flowers, large glossy leaves, and striking fruit.'
  },
  {
    symbol: 'LAIN',
    src: 'lain_001_shp',
    scientificName: 'Lagerstroemia indica',
    authority: 'L.',
    commonName: 'crapemyrtle',
    description: 'Crape myrtle has prolific summer flowers, heat and drought tolerance, and year-round landscape interest.'
  }
];

// Return output markup as DOM element:

const origin = 'https://plants.sc.egov.usda.gov';
const srcForImage = src => `${origin}/gallery/standard/${src}.jpg`;
const hrefForLink = symbol => `${origin}/core/profile?symbol=${symbol}`;

const renderPlant = ({authority, commonName, description, scientificName, src, symbol}) => {
  const li = document.createElement('li');

  const img = document.createElement('img');
  // TODO adapt code from 04-setAttribute-challenge.js file
  img.setAttribute('src', srcForImage(src));
  img.setAttribute('alt', commonName);
  li.appendChild(img);

  const h3 = document.createElement('h3');
  // TODO adapt code from 05-class-challenge.js file

  li.appendChild(h3);

  const p = document.createElement('p');
  p.appendChild(document.createTextNode(description));
  li.appendChild(p);

  return li;
};

const renderSection = ({heading, items}) => {
  const h2 = document.createElement('h2');
  h2.appendChild(document.createTextNode(heading));

  const ul = document.createElement('ul');
  // TODO use forEach method to append each li element in items array to ul element

  const section = document.createElement('section');
  section.appendChild(h2);
  section.appendChild(ul);

  return section;
};

// Put markup as string into Web page:

const heading = 'June';
const items = plants.map(renderPlant);

const root = document.querySelector('#root');
root.appendChild(renderSection({heading, items}));
