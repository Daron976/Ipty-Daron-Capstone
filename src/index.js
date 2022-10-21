// eslint-disable-next-line
import { getList } from './modules/API.js';
import './styles.css';
import {
  imgUrl,
  displayPopUp,
} from './modules/displayPopUp.js';

document.addEventListener('DOMContentLoaded', () => {
  getList()
    .then((data) => {
      const nameHolder = document.querySelectorAll('.brewery-name');
      const breweryImg = document.querySelectorAll('.bre-img');
      const arr = Array.from(nameHolder);
      arr.forEach((task, i) => {
        if ((task.id === data[i].id) && (imgUrl[i].id === data[i].id)) {
          task.innerHTML += data[i].name;
          breweryImg[i].setAttribute('src', imgUrl[i].url);
          breweryImg[i].setAttribute('alt', data[i].name);
        }
      });
    });
  getList()
    .then((data) => displayPopUp(data));
});

displayPopUp();

document.getElementById('menu-open').addEventListener('click', () => {
  document.getElementById('mobile-menu').style.display = 'flex';
  document.getElementById('menu-open').style.display = 'none';
});

document.querySelector('#menu-close').addEventListener('click', () => {
  document.getElementById('mobile-menu').style.display = 'none';
  document.getElementById('menu-open').style.display = 'flex';
});
