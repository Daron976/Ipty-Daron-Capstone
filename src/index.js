// eslint-disable-next-line
import _ from 'lodash';
import {getLikes, likeInteraction} from './modules/likesget';
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
  // const items = document.getElementById('list-items');
  const response = await fetch('https://api.openbrewerydb.org/breweries?by_type=nano&per_page=6');
  const data = await response.json();
  // .then(response => response.json())
  // .then(data => vm.feed = data);

  return data;
};

const commentBtn = document.querySelectorAll('.comment-btn');
const commentArray = Array.from(commentBtn);
const popUpHolder = document.querySelector('.popup-holder');
let dataArr;

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
    .then((data) => {
      localStorage.setItem('API-result', JSON.stringify(data));
      dataArr = JSON.parse(localStorage.getItem('API-result'));
    });
});

const displayPopUp = async () => commentArray.forEach((btn) => {
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
                  <p>this is a generic comment that goes on forever</p>
                  <p>I just realised that i could have used the lopsum ipsom generic texts</p>
                </div>
                <div class="form-data">
                  <h3>Add a comment</h3>
                  <form action="#">
                    <label for="name"></label>
                    <input type="text" id="name" name="name" placeholder="Your name">
                    <label for="text"></label>
                    <textarea name="text" id="text" cols="30" rows="5" placeholder="Your comment"></textarea>
                    <div class="btn-width">
                      <button type="button" class="btn">Comment</button>
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
      }
    }
  });
});
getLikes();
likeInteraction();
displayPopUp();
