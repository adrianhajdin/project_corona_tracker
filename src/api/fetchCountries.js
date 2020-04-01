import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api/countries';

export const countries = axios.get(URL).then(({ data }) => data.countries);
