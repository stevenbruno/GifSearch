const getGif = (search) => {
  return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=HeYWGXYFHzdtOvhWWvPh2tYiViKjqhzI&s=${search}`, 
    {mode: 'cors'}
  )
  .then((response) => response.json())
  .then((response) => { return response.data.images.original.url;})
  .catch((err) => console.error(err));
}

export { getGif };