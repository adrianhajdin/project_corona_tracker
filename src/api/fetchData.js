import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

const fetchData = () => {
  return axios.get(URL)
    .then(({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
      const date = new Date (lastUpdate);

      return ({
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
        lastUpdate: lastUpdate
      });
    })
    .catch(() => {
  
    });
}

export default fetchData;