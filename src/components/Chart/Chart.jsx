import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';

import fetchDaily from '../../api/fetchDaily';

const Chart = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      const data = await fetchDaily();

      console.log(data);
      setData(data)
    }  
  
    fetchMyAPI();
  }, []);
  
  return (
    <div>
      {data[0] ? <Line 
        data={{
          labels: data.map(({date}) => date),
          datasets: [{ 
              data: data.map(({confirmed}) => confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true
            }, { 
              data: data.map(({deaths}) => deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "#ff9999",
              fill: true
            }
          ]
        }} 
      />: null}
    
    </div>
  )
}

export default Chart;
