import React from 'react';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './Info.css';

const Info = ({ data }) => {
  if (!data.confirmed) {
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <Grid container spacing={3} justify="center" style={{marginBottom: '40px'}}>
      <Grid item xs={3}>
        <Card >
          <CardContent>
            <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
              Infected
        </Typography>
            <Typography variant="h5" component="h2">
              {data.confirmed.toLocaleString()}
            </Typography>
            <Typography color="textSecondary" style={{ marginBottom: 12 }}>
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
        </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card >
          <CardContent>
            <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
              Recovered
        </Typography>
            <Typography variant="h5" component="h2">
              {data.recovered.toLocaleString()}
            </Typography>
            <Typography color="textSecondary" style={{ marginBottom: 12 }}>
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
        </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card >
          <CardContent>
            <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
              Deaths
        </Typography>
            <Typography variant="h5" component="h2">
              {data.deaths.toLocaleString()}
            </Typography>
            <Typography color="textSecondary" style={{ marginBottom: 12 }}>
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
        </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      {/* <Grid item xs={3}>
        <Card className="card">
          <CardMedia style={{ height: '100px' }} image={confirmed} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">Infected</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Infected: {data.confirmed.toLocaleString()}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardMedia style={{ height: '100px' }} image={recovered} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">Recovered</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Recovered: {data.recovered.toLocaleString()}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardMedia style={{ height: '100px' }} image={deaths} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">Deaths</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Deaths: {data.confirmed.toLocaleString()}</Typography>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid>
  )
}

export default Info;
