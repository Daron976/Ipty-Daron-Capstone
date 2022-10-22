import { postAPI } from './API.js';

const likeBtns = document.querySelectorAll('.like-btn');
const likeAmount = document.querySelectorAll('.like-amount');

const likeInteraction = () => {
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      const targetParent = e.target.parentNode.parentNode.lastElementChild;
      // eslint-disable-next-line
      const id = targetParent.firstElementChild.id;
      let likeVal = 0;

      if (likeAmount[index].innerHTML === '') {
        likeVal += 1;
        likeAmount[index].innerHTML = likeVal;
      } else {
        likeVal = parseInt(likeAmount[index].textContent, 10);
        likeVal += 1;
        likeAmount[index].innerHTML = likeVal;
      }

      const idObj = {
        item_id: id,
      };
      postAPI('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXa9GIOD94bm1hT63nt8/likes', idObj);
    });
  });
};

const displayLikes = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < likeAmount.length; j += 1) {
      if (arr[i].item_id === likeAmount[j].id) {
        likeAmount[j].innerHTML = arr[i].likes;
      }
    }
  }
};

export { likeInteraction, displayLikes };
