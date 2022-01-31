import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

  const [images, setImages] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    getGifs(category)
      .then(data => {
        setImages({
          loading: false,
          data,
        })
      });
  }, [images]);
  
  return images;

}