import React from 'react';

import { Typography } from '@material-ui/core';

import styles from './App.module.css';
import CoronaLogo from './images/image.png';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <span className={styles.link} onClick={() => this.handleCountryChange('')}><img className={styles.image} src={CoronaLogo} alt="logo" /></span>
        <Cards data={data} />
        <CountryPicker country={country} handleCountryChange={this.handleCountryChange} />
        { 
          window.innerWidth > 500 
            ? <Chart data={data} country={country} /> 
            : <Typography align="center" variant="h5">Rotate your device and reload the page to see the chart</Typography>
        }
      </div>
    );
  }
}

export default App;