
import React from 'react';
import { SearchGifs } from './SearchGifs';

export const ItemsGifs = ({categories}) => {
  return (
    <ul>
      {
        categories.map(category => (
          <li key={category}>
            <h2>{category}</h2>
            <SearchGifs key={category} category={category} />
          </li>
        ))
      }
    </ul>
  );
};
