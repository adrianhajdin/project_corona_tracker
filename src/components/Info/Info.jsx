import React from 'react';

import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';

import './Info.css';

const Info = ({ data }) => {
  if (!data.confirmed) {
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className="card">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5" component="h2">
                {data.confirmed.toLocaleString()}
              </Typography>
              <Typography color="textSecondary">
                {new Date(data.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of active cases of COVID-19.
        </Typography>
            </CardContent>
            
        </Grid>
        <Grid item xs={12} md={3} component={Card} className="card">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
        </Typography>
              <Typography variant="h5" component="h2">
                {data.recovered.toLocaleString()}
              </Typography>
              <Typography color="textSecondary">
                {new Date(data.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of recoveries from COVID-19.
        </Typography>
            </CardContent>
            
        </Grid>
        <Grid item xs={12} md={3} component={Card} className="card">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
        </Typography>
              <Typography variant="h5" component="h2">
                {data.deaths.toLocaleString()}
              </Typography>
              <Typography color="textSecondary">
                {new Date(data.lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of deaths caused by COVID-19.
        </Typography>
            </CardContent>
            
        </Grid>
      </Grid>
    </div>
  )
}

export default Info;
