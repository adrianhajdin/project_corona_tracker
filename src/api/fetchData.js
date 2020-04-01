import axios from 'axios';

const fetchData = (country) => {
  let url = 'https://covid19.mathdro.id/api';

  console.log(country);

  if (country) {
    url = `${url}/countries/${country}`;
  }

  return axios.get(url)
    .then(({ data: { confirmed, recovered, deaths, lastUpdate } }) => ({
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate,
    }));
};

export default fetchData;
