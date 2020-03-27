import React from 'react';

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
    const { data} = this.state;

    return (
      <>
        {data.confirmed ? <Info data={data} /> : 'loading'}
        <div style={{ width: '50%'}}><Chart /></div>
        <Countries />
      </>
    );
  }
}

export default App;