import React from 'react';

import './App.css';
import { Container, Typography } from '@material-ui/core';

import {isMobile} from 'react-device-detect';

import Info from './components/Info/Info';
import Countries from './components/Countries/Countries';
import Chart from './components/Chart/Chart';

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
      <Container>
        <Typography variant="h2" className="heading">Corona Statistics</Typography>
        <div className="intro-container">
          <Info data={data} />
          <Countries handleCountryChange={this.handleCountryChange} />
        </div>
        { window.innerWidth > 500 ? <Chart data={data} country={country} /> : <Typography align="center" variant="h5">Rotate your device and reload the page to see the chart</Typography>}
      </Container>
    );
  }
}

export default App;