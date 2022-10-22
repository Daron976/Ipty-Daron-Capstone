/* eslint-disable */
document.body.innerHTML = `
<section class="homepage-content flex">
    <div class="first-container flex">
      <article class="list-item flex">
        <img class="bre-img">
        <div class="article-details flex">
          <div class="article-content flex">
            <div class="name-with-likes flex">
              <p class="brewery-name" id="4-stitch-brewing-co-bothell"></p>
              <span class="material-symbols-outlined like-btn">heart_plus</span>

            </div>
            <p class="likes">likes: <span class="like-amount" id="4-stitch"></span></p>
          </div>
          <div class="article-btn">
            <button type="button" name="comment" class="comment-btn btn">Comment</button>
          </div>
        </div>
      </article>
      <article class="list-item flex">
        <img class="bre-img">
        <div class="article-details flex">
          <div class="article-content flex">
            <div class="name-with-likes flex">
              <p class="brewery-name" id="brockopp-brewing-valley-city"></p>
              <span class="material-symbols-outlined like-btn">heart_plus</span>
            </div>
            <p class="likes">likes: <span class="like-amount" id="brockopp"></span></p>
          </div>
          <div class="article-btn">
            <button type="button" name="comment" class="comment-btn btn">Comment</button>
          </div>
        </div>
      </article>
      <article class="list-item flex">
        <img class="bre-img">
        <div class="article-details flex">
          <div class="article-content flex">
            <div class="name-with-likes flex">
              <p class="brewery-name" id="brouwerij-les-deplorables-woodinville"></p>
              <span class="material-symbols-outlined like-btn">heart_plus</span>
            </div>
            <p class="likes">likes: <span class="like-amount" id="brouwerij"></span></p>
          </div>
          <div class="article-btn">
            <button type="button" name="comment" class="comment-btn btn">Comment</button>
          </div>
        </div>
      </article>
    </div>

    <div class="second-container flex">
      <article class="list-item flex">
        <img class="bre-img">
        <div class="article-details flex">
          <div class="article-content flex">
            <div class="name-with-likes flex">
              <p class="brewery-name" id="gnarly-cedar-brewing-greenleaf"></p>
              <span class="material-symbols-outlined like-btn">heart_plus</span>
            </div>
            <p class="likes">likes: <span class="like-amount" id="gnarly"></span></p>
          </div>
          <div class="article-btn">
            <button type="button" name="comment" class="comment-btn btn">Comment</button>
          </div>
        </div>
      </article>

      <article class="list-item flex">
        <img class="bre-img">
        <div class="article-details flex">
          <div class="article-content flex">
            <div class="name-with-likes flex">
              <p class="brewery-name" id="oxford-brewing-company-grand-forks"></p>
              <span class="material-symbols-outlined like-btn">heart_plus</span>
            </div>
            <p class="likes">likes: <span class="like-amount" id="oxford"></span></p>
          </div>
          <div class="article-btn">
            <button type="button" name="comment" class="comment-btn btn">Comment</button>
          </div>
        </div>
      </article>
    </div>

  </section>
`


const likeAmount = document.querySelectorAll('.like-amount');

const mocked = jest.fn(() => {
  likeAmount.forEach((index) => {
    let likeVal = 0;
    if (index.innerHTML === '') {
      likeVal += 1;
      index.innerHTML = likeVal;
    } else {
      likeVal = parseInt(index.textContent, 10);
      likeVal += 1;
      index.innerHTML = likeVal;
    }
  });
})


describe('test likescounter', () => {
  test('update likes', () => {
    mocked();
  
    expect(likeAmount[0].innerHTML).toEqual('1');
  })
})
