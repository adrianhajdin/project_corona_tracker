import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api/daily';

const fetchData = () => {
  return axios.get(URL)
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
}

export default fetchData;