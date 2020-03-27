import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

const fetchData = () => {
  return axios.get(URL)
    .then(({ data: { confirmed, recovered, deaths } }) => {
      return ({
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
      });
    })
    .catch(() => {
  
    });
}

export default fetchData;