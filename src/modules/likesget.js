const getLikes = async () => {
  const cards = document.querySelectorAll('.list-item');
  const likeCount = document.querySelectorAll('.like-count');
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PqPAaHPHlQPC44RiKxBp/likes',
  )
    .then((response) => response.json())
    .then((json) => {
      cards.forEach((card, index) => {
        json.forEach((item) => {
          if (item.item_id === card.id) {
            likeCount[index].innerHTML = item.likes;
          }
        });
      });
    });
};

const likeInteraction = async () => {
  const likeBtns = document.querySelectorAll('.like-btn');
  const likeBtnIcon = document.querySelectorAll('.fa-heart');
  const likeBtnCount = document.querySelectorAll('.like-count');
  const cards = document.querySelectorAll('.list-item');
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      likeBtnIcon[index].classList.remove('fa-regular');
      likeBtnIcon[index].classList.add('fa-solid');
      likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML) + 1;
      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PqPAaHPHlQPC44RiKxBp/likes', {
        method: 'POST',
        body: JSON.stringify({
          item_id: cards[index].id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    });
  });
};
export { getLikes, likeInteraction };
