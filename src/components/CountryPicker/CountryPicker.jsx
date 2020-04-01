import React, { useState, useEffect } from 'react';

import { NativeSelect, FormControl } from '@material-ui/core';

import { countries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [fetchedCountries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await countries);
    };

    fetchCountries();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map(({ name }) => <option key={name} value={name}>{name}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
