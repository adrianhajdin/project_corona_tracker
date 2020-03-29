import React from 'react';

import './App.css';
import { Container, Typography } from '@material-ui/core';

import Info from './components/Info/Info';
import Countries from './components/Countries/Countries';
import Chart from './components/Chart/Chart';

import fetchData from './api/fetchData';

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <Container>
        <Typography variant="h1" className="heading">Corona Statistics</Typography>
        <Countries handleCountryChange={this.handleCountryChange} f/>
        <Info data={data} />
        <Chart data={data} />
      </Container>
    );
  }
}

export default App;