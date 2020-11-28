import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";
import cx from 'classnames';


const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    // <div className={styles.container}>
    //     <Typography gutterBottom variant="h4" component="h2">Global</Typography>
    //   <Grid container spacing={3} justify="center">
    //     <CardComponent
    //       className={styles.infected}
    //       cardTitle="Infected"
    //       value={confirmed.value}
    //       lastUpdate={lastUpdate}
    //       cardSubtitle="Number of active cases from COVID-19."
    //     />
    //     <CardComponent
    //       className={styles.recovered}
    //       cardTitle="Recovered"
    //       value={recovered.value}
    //       lastUpdate={lastUpdate}
    //       cardSubtitle="Number of recoveries from COVID-19."
    //     />
    //     <CardComponent
    //       className={styles.deaths}
    //       cardTitle="Deaths"
    //       value={deaths.value}
    //       lastUpdate={lastUpdate}
    //       cardSubtitle="Number of deaths caused by COVID-19."
    //     />
    //   </Grid>
    // </div>

    <div className="container">
      <div className="row">
        <div className="col-lg-4 mx-auto">
          <div className={cx(styles.box, styles.infected)}>
            <div className="card-body">
              <h5 className="card-title">Infected</h5>
              <h5 className="cards">
                <CountUp
                  start={0} 
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </h5>
              <h5 className="">
                {new Date(lastUpdate).toDateString()}
              </h5>
              <h5 className="">Number of active Cases of Covid-19</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mx-auto">
          <div className={cx(styles.box, styles.recovered)}>
            <div className="card-body recovered">
              <h5 className="card-title">Recovered</h5>
              <h5 className="cards">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </h5>
              <h5 className="">
                {new Date(lastUpdate).toDateString()}
              </h5>
              <h5 className="">Number of recoveries from Covid-19</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mx-auto">
          <div className={cx(styles.box, styles.deaths)}>
            <div className="card-body">
              <h5 className="card-title">Deaths</h5>
              <h5 className="cards">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </h5>
              <h5 className="">
                {new Date(lastUpdate).toDateString()}
              </h5>
              <h5 className="">
                Number of deaths Caused by Covid-19
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
