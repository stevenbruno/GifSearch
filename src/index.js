import { getGif } from './getGif';

const img = document.querySelector('#mainImg');
const btn = document.querySelector('#searchBtn');
const sField = document.querySelector('#searchField');
btn.addEventListener('click', newSearch);

function newSearch() {
  const term = sField.value;
  let newImg = getGif(term);
  Promise.resolve(newImg).then((res) => img.src = res);
}

let imgSrc = getGif('dog');
Promise.resolve(imgSrc).then((src) => img.src = src); 