import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api/countries';

export const fetchCountryData = (country) => {
  const countryUrl = `${URL}/${country}`;

  return axios.get(countryUrl)
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

export const countries = axios.get(URL).then(({ data }) => data.countries);