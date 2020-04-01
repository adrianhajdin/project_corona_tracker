import React from 'react';

import { Typography } from '@material-ui/core';

import './App.css';
import CoronaLogo from './images/image.png';

import { Info, Countries, Chart } from './components';
import fetchData from './api/fetchData';

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
      <div className="container">
        <span className="link" onClick={() => this.handleCountryChange('')}><img className="image-covid" src={CoronaLogo} alt="logo" /></span>
        <div className="intro-container">
          <Info data={data} />
          <Countries handleCountryChange={this.handleCountryChange} />
        </div>
        { window.innerWidth > 500 ? <Chart data={data} country={country} /> : <Typography align="center" variant="h5">Rotate your device and reload the page to see the chart</Typography>}
      </div>
    );
  }
}

export default App;