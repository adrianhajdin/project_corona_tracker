import React, { useState, useEffect } from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

const App = () => {
	const [data, setData] = useState({});
	const [country, setCountry] = useState();

	useEffect(() => {
		async function loadData() {
			const data = await fetchData();
			setData({ data });
		}
		loadData();
	}, []);

	const handleCountryChange = async (country) => {
		const data = await fetchData(country);
		setCountry(country);
		setData(data);
	}

	return (
		<div className={styles.container}>
			<img className={styles.image} src={image} alt="COVID-19" />
			<Cards data={data} />
			<CountryPicker handleCountryChange={handleCountryChange} />
			<Chart data={data} country={country} />
		</div>
	);

}

export default App;