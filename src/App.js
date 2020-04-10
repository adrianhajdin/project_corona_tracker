import React, { useState, useEffect } from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';
import styles from './App.module.css';
import image from './images/image.png';

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  const handleDataFetch = async () => {
    try {
      const res = await fetchData();
      setData(res);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCountryChange = async (country) => {
    try {
      const res = await fetchData(country);
      setData(res);
      setCountry(country);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleDataFetch();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
