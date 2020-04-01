import axios from 'axios';

let url = 'https://covid19.mathdro.id/api';

export const fetchData = (country) => {
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

export const fetchDaily = () => axios.get(`${url}/daily`)
  .then(({ data }) => {
    const strippedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return strippedData;
  })
  .catch(() => {

  });

export const countries = axios.get(`${url}/countries`).then(({ data }) => data.countries);
