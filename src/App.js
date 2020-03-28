import React from 'react';

import './App.css';
import { Container, Typography } from '@material-ui/core';

import Info from './components/Info/Info';
import Chart from './components/Chart/Chart';
import Countries from './components/Countries/Countries';

import fetchData from './api/fetchData';

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <Container>
        <Typography variant="h1" className="heading">Corona Statistics</Typography>
        <Info data={data} />
        <Chart />
        {/* <Countries /> */}
      </Container>
    );
  }
}

export default App;