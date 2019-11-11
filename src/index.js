import { getGif } from './getGif';

const img = document.querySelector('#mainImg');
let imgSrc = getGif('dog');
Promise.resolve(imgSrc).then((src) => img.src = src);