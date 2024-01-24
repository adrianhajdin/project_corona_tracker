// CountryPicker.jsx

import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const fetchedCountries = await fetchCountries();
        console.log('Fetched Countries:', fetchedCountries); // Log the value
        setCountries(fetchedCountries);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">United States</option>
        {Array.isArray(countries) &&
          countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker; // Single default export
