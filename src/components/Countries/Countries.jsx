import React, { useState, useEffect } from 'react';

import { NativeSelect, FormControl, } from '@material-ui/core';

import { countries } from '../../api/fetchCountries';

const Countries = ({ handleCountryChange }) => {
  const [fetchedCountries, setCountries] = useState([]);
  const [country, setCountry] = useState();

  useEffect(() => {
    async function fetchMyAPI() {
      setCountries(await countries);
    }  
  
    fetchMyAPI();
  }, [setCountries]);

  useEffect(() => {
    handleCountryChange(country);
  }, [country, handleCountryChange]);

  return (
    <FormControl style={{width: '30%', marginBottom: '30px'}}>
      <NativeSelect defaultValue="" onChange={(e) => setCountry(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map(({name}) => <option value={name}>{name}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default Countries;
