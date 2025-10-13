import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let apiUrl = "https://disease.sh/v3/covid-19/all";
  if (country && country !== "Global") {
    apiUrl = `https://disease.sh/v3/covid-19/countries/${country}`;
  }

  try {
    const { data } = await axios.get(apiUrl);
    return {
      confirmed: { value: data.cases },
      recovered: { value: data.recovered },
      deaths: { value: data.deaths },
      lastUpdate: data.updated,
    };
  } catch (error) {
    console.log("API ERROR:", error);
    return {
      confirmed: { value: 0 },
      recovered: { value: 0 },
      deaths: { value: 0 },
      lastUpdate: "",
    };
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      "https://api.covidtracking.com/v1/us/daily.json"
    );
    return data.map(({ positive, recovered, death, dateChecked: date }) => ({
      confirmed: positive,
      recovered,
      deaths: death,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    // data is an array of country objects
    return data.map((country) => country.country);
  } catch (error) {
    return [];
  }
};

export const fetchStates = async (country) => {
  try {
    const { data } = await axios.get(`${url}/countries/${country.country}/confirmed`);
    return data.map((stateData) => ({ provinceState: stateData.provinceState, confirmed: stateData.confirmed, active: stateData.active, recovered: stateData.recovered, deaths:stateData.deaths}));
  } catch (error) {
    return error;
  }

}
