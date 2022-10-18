// eslint-disable-next-line
import _ from 'lodash';
import './styles.css';

const newArray = [
    {
        name: 'brewery 1'
    },
    {
        name: 'brewery 2'
    },
    {
        name: 'brewery 3'
    },
    {
        name: 'brewery 4'
    },
    {
        name: 'brewery 5'
    },
    {
        name: 'brewery 6'
    }
]

const getList = async () => {
    const items = document.getElementById('list-items');
    await fetch(
      'https://api.openbrewerydb.org/breweries?by_type=nano&per_page=6',
    )
      .then((res) => res.json())
      .then((data) => {
        const nameHolder = document.querySelectorAll('.brewery-name');
        const arr = Array.from(nameHolder);
        let counter = 0;
        arr.forEach((task) => {
            task.innerHTML += data[counter].name;
            // for (let i = 0; i < 6; i++) {
            // }
            counter++;
        })
        
      })}

      document.addEventListener('DOMContentLoaded', () => {
        // const nameHolder = document.querySelectorAll('.brewery-name');
        // const arr = Array.from(nameHolder);
        // arr.forEach((task) => {
        //     // let counter = 0;
        //     task.innerHTML += 'testrun';
        //     // counter++;
        // })

        getList();
      })