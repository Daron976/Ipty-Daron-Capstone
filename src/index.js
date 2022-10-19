// eslint-disable-next-line
import _ from 'lodash';
import './styles.css';

const getList = async () => {
  // const items = document.getElementById('list-items');
  await fetch(
    'https://api.openbrewerydb.org/breweries?by_type=nano&per_page=6',
  )
    .then((res) => res.json())
    .then((data) => {
      const nameHolder = document.querySelectorAll('.brewery-name');
      const arr = Array.from(nameHolder);
      arr.forEach((task, i) => {
        task.innerHTML += data[i].name;
      });
    });
};

document.addEventListener('DOMContentLoaded', () => {
  // const nameHolder = document.querySelectorAll('.brewery-name');
  // const arr = Array.from(nameHolder);
  // arr.forEach((task) => {
  //     // let counter = 0;
  //     task.innerHTML += 'testrun';
  //     // counter++;
  // })

  getList();
});