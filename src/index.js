// eslint-disable-next-line
import _ from 'lodash';
import './styles.css';

const imgUrl = [
  {
    id: '4-stitch-brewing-co-bothell',
    url: 'https://i.pinimg.com/564x/ec/61/e1/ec61e14cdffe29b9d101746777147836.jpg',
  },
  {
    id: 'brockopp-brewing-valley-city',
    url: 'https://i.pinimg.com/564x/93/c3/76/93c37604ff7280e5c7977399def0d1ca.jpg',
  },
  {
    id: 'brouwerij-les-deplorables-woodinville',
    url: 'https://i.pinimg.com/564x/95/c0/8e/95c08eb331e50847b6be8e2de19e3afe.jpg',
  },
  {
    id: 'gnarly-cedar-brewing-greenleaf',
    url: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  },
  {
    id: 'oxford-brewing-company-grand-forks',
    url: 'https://i.pinimg.com/564x/07/2a/dd/072add42318c1aaefd083bc258503568.jpg',
  },
];

const getList = async () => {
  const response = await fetch('https://api.openbrewerydb.org/breweries?by_type=nano&per_page=6');
  const data = await response.json();

  return data;
};

const postComment = async (url, dataObj) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(dataObj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response;
};

const getComment = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WeiwNxFf2zcjWHsPu3w9/comments?item_id=${id}`)
    .then((res) => res.json());

  return response;
};

const commentBtn = document.querySelectorAll('.comment-btn');
const commentArray = Array.from(commentBtn);
const popUpHolder = document.querySelector('.popup-holder');

const displayPopUp = async (dataArr) => commentArray.forEach((btn, i) => {
  btn.addEventListener('click', (e) => {
    e.target.value = dataArr[i].id;
    for (let i = 0; i < dataArr.length; i += 1) {
      if ((dataArr[i].id === e.target.value) && (imgUrl[i].id === e.target.value)) {
        const popupContent = `
          <div class="popup-window flex">
            <div class="top-layer">
              <div class="data-img flex">
                <img 
                src="${imgUrl[i].url}"; 
                alt="brewery with alcohol tanks">
                <span class="material-symbols-outlined close-popup">cancel</span>
              </div>
              <div>
                <h2 class="popup-window-header">
                  ${dataArr[i].name}
                </h2>
                <div class="popup-info">
                  <div class="popup-info-section">
                    <p class="info-item"><strong>Brewery type</strong>: ${dataArr[i].brewery_type}</p>
                    <p class="info-item"><strong>Country</strong>: ${dataArr[i].country}</p>
                    <p class="info-item"><strong>State</strong>: ${dataArr[i].state}</p>
                  </div>
                  <div class="popup-info-section">
                    <p class="info-item"><strong>City</strong>: ${dataArr[i].city}</p>
                    <p class="info-item"><strong>Webpage</strong>: <a href="${dataArr[i].webpage_url}">${dataArr[i].name}</a></p>
                    <p class="info-item"><strong>Phone</strong>: ${dataArr[i].phone}</p>
                  </div>
                </div>
              </div>
              <div class="user-input">
                <div class="comments">
                  <h3>Comments</h3>
                  <div class="comment-details flex"></div>
                </div>
                <div class="form-data flex">
                  <h3>Add a comment</h3>
                  <form action="#" class="flex">
                    <label for="name"></label>
                    <input type="text" id="name" name="name" placeholder="Your name">
                    <label for="text"></label>
                    <textarea name="text" id="text" cols="30" rows="5" placeholder="Your comment"></textarea>
                    <small id="empty-fields"><span class="material-symbols-outlined">error</span> All fields are required</small>
                    <div class="btn-width">
                      <button type="button" class="btn" id="comment-submission">Comment</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>`;

        popUpHolder.insertAdjacentHTML('afterbegin', popupContent);

        document.querySelector('.close-popup').addEventListener('click', () => {
          const removed = document.querySelector('.popup-window');
          popUpHolder.removeChild(removed);
        });

        document.querySelector('#comment-submission').addEventListener('click', () => {
          const commentName = document.querySelector('#name');
          const commentText = document.querySelector('#text');

          if ((commentName.value === '') || (commentText.value === '')) {
            document.getElementById('empty-fields').style.display = 'flex';
          } else {
            document.getElementById('empty-fields').style.display = 'none';
            const commentObj = {
              item_id: dataArr[i].id,
              username: commentName.value,
              comment: commentText.value,
            };

            postComment('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WeiwNxFf2zcjWHsPu3w9/comments', commentObj)
              .then((response) => response.json())
              .then((json) => json);

            document.querySelector('.comment-details').innerHTML += `
              <p>${commentName.value}: ${commentText.value}</p>
            `;
          }
        });

        getComment(dataArr[i].id)
          .then((data) => {
            data.forEach((task) => {
              document.querySelector('.comment-details').innerHTML += `
                <p>${task.username}: ${task.comment}</p>
              `;
            });
          });
      }
    }
  });
});

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
  // console.log('test')
  document.getElementById('mobile-menu').style.display = 'flex';
  document.getElementById('menu-open').style.display = 'none';
});

document.querySelector('#menu-close').addEventListener('click', () => {
  document.getElementById('mobile-menu').style.display = 'none';
  document.getElementById('menu-open').style.display = 'flex';
});
