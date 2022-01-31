
export const getGifs = async (category) => {
  try {
    const request = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=78847WpcI2xbW6JP4cE5lL79CAUQWaVV&q=${encodeURI(category)}&limit=25&offset=0&rating=g&lang=en`)
    const {data} = await request.json();
    return data.map(e => ({
      id: e.id,
      title: e.title,
      src: e.images?.downsized_medium.url,
    }));
  } catch (error) {
    return Promise.reject(error)
  }
}