import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2';

import fetchDaily from '../../api/fetchDaily';

const Chart = ({ data }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    async function fetchMyAPI() {
      const dailyData = await fetchDaily();

      setDailyData(dailyData)
    }

    fetchMyAPI();
  }, []);

  const barChart = (
     data.confirmed ? <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["blue", "green", "red"],
            data: [657, 45, 5]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: 'Current state in Croatia'
        }
      }}
    /> : null
  )

  const lineChart = (
    dailyData[0] && !data.confirmed ? <Line data={{
      labels: dailyData.map(({ date }) => date),
      datasets: [{
        data: dailyData.map(({ confirmed }) => confirmed),
        label: "Infected",
        borderColor: "#3333ff",
        fill: true
      }, {
        data: dailyData.map(({ deaths }) => deaths),
        label: "Deaths",
        borderColor: "red",
        backgroundColor: "#ff9999",
        fill: true
      }
      ]
    }}
    />: null
  )

  return (
    <div>
      {lineChart}
      {barChart}
    </div>
  )
}

export default Chart;
