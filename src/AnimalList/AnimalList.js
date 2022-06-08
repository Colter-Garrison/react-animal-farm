import React from 'react';
import backgroundImg from '../background-image.png';
import './AnimalList.css';
import AnimalCard from '../AnimalCard/AnimalCard';

export default function AnimalList({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {animals.map((animal, i) => <AnimalCard
        {...animal}
        key={animal.type + i} />)
      }
    </main>
  );
}