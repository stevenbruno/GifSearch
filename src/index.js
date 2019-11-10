const img = document.querySelector('#mainImg');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=HeYWGXYFHzdtOvhWWvPh2tYiViKjqhzI&s=cats&weirdness=10', {mode: 'cors'})
  .then((response) => response.json())
  .then((response) => img.src = response.data.images.original.url)
  .catch((err) => console.error(err));