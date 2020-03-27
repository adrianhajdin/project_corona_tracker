import React, { useState, useEffect } from 'react';

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
      <select onChange={(e) => setCountry(e.target.value)}>
        {fetchedCountries.map(({name}) => {
          return <option value={name}>{name}</option>
        })}
      </select>
      <h1>{country}</h1>
    </div>
  )
}

export default Countries;
