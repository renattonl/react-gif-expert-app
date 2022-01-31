import React from 'react';

export const ItemGif = ({title, src}) => {
  return (
    <div className='card-item'>
      <img src={src} alt={title} />
      <p>{title}</p>
    </div>
  );
};
