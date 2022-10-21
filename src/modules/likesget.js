import { postAPI } from "./API";

const likeBtns = document.querySelectorAll('.like-btn');
const likeAmount = document.querySelectorAll('.like-amount');

const likeInteraction = () => {
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      
      const targetParent = e.target.parentNode.parentNode.lastElementChild;
      const id = targetParent.firstElementChild.id;
      let likeVal = 0;

      if (likeAmount[index].innerHTML === '') {
        likeVal++;
        likeAmount[index].innerHTML = likeVal;
      } else {
        likeVal = parseInt(likeAmount[index].textContent);
        likeVal++;
        likeAmount[index].innerHTML = likeVal;
      }

      const idObj = {
        item_id: id
      }
      postAPI('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXa9GIOD94bm1hT63nt8/likes', idObj);
    });
  });
};

const displayLikes = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < likeAmount.length; j++) {
      if (arr[i].item_id == likeAmount[j].id) {
        likeAmount[j].innerHTML = arr[i].likes;
      } 
    }
  }
}


export { likeInteraction, displayLikes };
