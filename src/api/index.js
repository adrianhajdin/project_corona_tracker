import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  return axios.get(changeableUrl)
    .then(({ data: { confirmed, recovered, deaths, lastUpdate } }) => ({
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate,
    }))
    .catch((error) => {
      console.log(error);
    });
};

export const fetchDailyData = () => axios.get(`${url}/daily`)
  .then(({ data }) => {
    const strippedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return strippedData;
  })
  .catch((error) => {
    console.log(error);
  });

export const countries = axios.get(`${url}/countries`).then(({ data }) => data.countries);
