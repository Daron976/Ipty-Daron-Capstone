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
    url: 'https://i.pinimg.com/564x/95/c0/8e/95c08eb331e50847b6be8e2de19e3afe.jpg',
  },
  {
    id: 'brouwerij-les-deplorables-woodinville',
    url: 'https://i.pinimg.com/564x/07/2a/dd/072add42318c1aaefd083bc258503568.jpg',
  },
  {
    id: 'gnarly-cedar-brewing-greenleaf',
    url: 'https://i.pinimg.com/564x/93/c3/76/93c37604ff7280e5c7977399def0d1ca.jpg',
  },
  {
    id: 'oxford-brewing-company-grand-forks',
    url: 'https://i.pinimg.com/564x/3b/cf/d3/3bcfd3b3d8e6b9d4d6af787ee50b3364.jpg',
  },
];

const getList = async () => {
  const response = await fetch('https://api.openbrewerydb.org/breweries?by_type=nano&per_page=6');
  const data = await response.json();

  return data;
};

const commentBtn = document.querySelectorAll('.comment-btn');
const commentArray = Array.from(commentBtn);
const popUpHolder = document.querySelector('.popup-holder');

document.addEventListener('DOMContentLoaded', () => {
  getList()
    .then((data) => {
      const nameHolder = document.querySelectorAll('.brewery-name');
      const arr = Array.from(nameHolder);
      arr.forEach((task, i) => {
        task.innerHTML += data[i].name;
      });
    });
  getList()
    .then((data) => displayPopUp(data));
});

const postComment = async (url, dataObj) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(dataObj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response;
}

const getComment = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WeiwNxFf2zcjWHsPu3w9/comments?item_id=${id}`)
    .then((res) => res.json());

  return response;
};


const displayPopUp = async (dataArr) => commentArray.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    for (let i = 0; i < dataArr.length; i += 1) {
      if ((dataArr[i].id === e.target.value) && (imgUrl[i].id === e.target.value)) {
        const popupContent = `
          <div class="popup-window">
            <div class="top-layer">
              <div class="data-img">
                <img 
                src="${imgUrl[i].url}"; 
                alt="brewery with alcohol tanks">
                <i class="fa-solid fa-x fa-2x"></i>
              </div>
              <div>
                <h2 class="popup-window-header">
                  ${dataArr[i].name}
                </h2>
                <div class="popup-info">
                  <p class="type">Brewery type: ${dataArr[i].brewery_type}</p>
                  <p class="country">Country: ${dataArr[i].country}</p>
                  <p class="state">State: ${dataArr[i].state}</p>
                  <p class="city">City: ${dataArr[i].city}</p>
                  <p class="website">Webpage: <a href="${dataArr[i].webpage_url}">${dataArr[i].name}</a></p>
                  <p class="number">${dataArr[i].phone}</p>
                </div>
              </div>
              <div class="grid">
                <div class="comments">
                  <h3>Comments</h3>
                  <div class="comment-details">

                  </div>
                </div>
                <div class="form-data">
                  <h3>Add a comment</h3>
                  <form action="#">
                    <label for="name"></label>
                    <input type="text" id="name" name="name" placeholder="Your name">
                    <label for="text"></label>
                    <textarea name="text" id="text" cols="30" rows="5" placeholder="Your comment"></textarea>
                    <div class="btn-width">
                      <button type="button" class="btn" id="comment-submission">Comment</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>`;

        popUpHolder.insertAdjacentHTML('afterbegin', popupContent);

        document.querySelector('.fa-x').addEventListener('click', () => {
          const removed = document.querySelector('.popup-window');
          popUpHolder.removeChild(removed);
        });

        document.querySelector('#comment-submission').addEventListener('click', () => {
          const commentName = document.querySelector('#name');
          const commentText = document.querySelector('#text');

          const commentObj = {
            item_id: dataArr[i].id,
            username: commentName.value,
            comment: commentText.value,
          }

          postComment('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WeiwNxFf2zcjWHsPu3w9/comments', commentObj)
            .then((response) => response.json())
            .then((json) => console.log(json));

          document.querySelector('.comment-details').innerHTML += `
            <p>${commentName.value}: ${commentText.value}</p>
          `;
        })

        getComment(dataArr[i].id)
        .then((data) => {
          data.forEach((task) => {
            document.querySelector('.comment-details').innerHTML += `
              <p>${task.username}: ${task.comment}</p>
            `;
          })
        });
      }
    }
  });
});

displayPopUp();

