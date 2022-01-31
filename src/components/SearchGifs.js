import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs'
import { ItemGif } from './ItemGif';

export const SearchGifs = ({category}) => {

  const {loading, data} = useFetchGifs(category);

  return (
    <div className='card-grid'>
      {
        loading && <p>Loading...</p>
      }
      {
        data.map(item => <ItemGif key={item.id} {...item} />)
      }
    </div>
  );
};
