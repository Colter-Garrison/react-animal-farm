import React from 'react';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList.js';

export default function Main({ animals }) {
  return (
    <div>
      <AnimalList animals={animals} />
    </div>
  );
}