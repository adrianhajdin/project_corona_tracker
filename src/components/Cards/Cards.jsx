import React from "react";
import { Grid } from "@material-ui/core";
import CardList from "../CardList/CardList";
import styles from "./Cards.module.css";

const Info = ({  data: { confirmed, recovered, deaths, lastUpdate  }}) => {

  if (!confirmed) {
    return "Loading...";
  }

  let itemsArr = new Array(confirmed, recovered, deaths, lastUpdate);
  const newItemsArr = itemsArr.map((item) => item.value);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {newItemsArr.length && (<CardList newItemsArr={newItemsArr} lastUpdate={lastUpdate}/>)}
      </Grid>
    </div>
  );
};

export default Info;
