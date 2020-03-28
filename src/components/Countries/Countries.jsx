import React, { useState, useEffect } from 'react';




import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import { countries, fetchCountry } from '../../api/fetchCountries';

const Countries = () => {
  const [fetchedCountries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    async function fetchMyAPI() {
      setCountries(await countries);
    }  
  
    fetchMyAPI();
  }, [setCountries]);

  return (
    <div>
      <Select onChange={(e) => setCountry(e.target.value)}>
        {fetchedCountries.map(({name}) => {
          return <MenuItem value={name}>{name}</MenuItem>
        })}
      </Select>
      <h1>{country}</h1>
    </div>
  )
}

export default Countries;
