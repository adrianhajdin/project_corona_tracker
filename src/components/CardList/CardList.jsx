import React from "react";
import CardItem from "../Card/Card";
import styles from "./CardList.module.css";

const List = ({ newItemsArr, covidData, lastUpdate }) => 
covidData.map((item, i) => {
    const values = newItemsArr[i];
    return (
      <CardItem
        className={item.style}
        cardTitle={item.title}
        value={values}
        lastUpdate={lastUpdate}
        cardSubtitle={item.subtitle}
      />
    );
  });


List.defaultProps = {
  covidData: [
    {
      style: styles.infected,
      title: "Infected",
      subtitle: "Number of active cases from COVID-19.",
    },
    {
      style: styles.recovered,
      title: "Recovered",
      subtitle: "Number of recoveries from COVID-19.",
    },
    {
      style: styles.deaths,
      title: "Deaths",
      subtitle: "Number of deaths caused by COVID-19.",
    },
  ],
};

export default List;
