import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2';

import './Chart.css'

import fetchDaily from '../../api/fetchDaily';

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
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
            backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
            data: [data.confirmed, data.recovered, data.deaths]
          }
        ]
      }}
      options={{
        legend: { display: false },
      title: { display: true, text: `Current state in ${country}` },
    }}
    /> : null
  )

  const lineChart = (
    dailyData[0] ? <Line data={{
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
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true
      }
      ]
    }}
    />: null
  )

  return (
    <div className="chart-container">
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart;
