import React from 'react'
import {Card, Typography, Grid, CardContent} from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css'


const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {

  if(!confirmed) return 'Loading';

  /*
    keep the cards[] below the if statement to avoid any issue when data within the objects
    haven't been fetched fromt he api yet
  */
  
  /* 
     You may need to adjust the data within the object depending on how destructed the data api
     Ex: {data: confirmed} => {data: confirmed.value}
  */
  
  const cards = [
    {title: 'Infected', data: confirmed , desc: 'Number of active cases of Covid-19'},
    {title: 'Recovered', data: recovered, desc: 'Number of recoveries from Covid-19'},
    {title: 'Deaths', data: deaths, desc: 'Number of deaths due to Covid-19'},
  ]
  
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        { cards.map((card, i) => {

          /*
            Using cx from the classnames package doesnt help when passing a class that depends on the title
            when mapping through the cards array
            I find the following code the best workaround around this.
          */
         
          const cardStyles = [styles.card];

          switch (card.title) {
            case 'Infected':
              cardStyles.push(styles.infected)
              break;
            case 'Recovered':
              cardStyles.push(styles.recovered)
              break;
            case 'Deaths':
              cardStyles.push(styles.deaths)
              break;
            default:
              break;
          }

          return (
            <Grid item key={i} component={Card} xs={12} md={3} className={cardStyles.join(' ')}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>{card.title}</Typography>
                  <Typography variant="h5" gutterBottom>
                    <CountUp from={0} end={card.data} duration={2.5} />
                  </Typography>
                  <Typography  color="textSecondary" variant='body2'>{(new Date(lastUpdate)).toLocaleDateString()}</Typography>
                  <Typography  variant="body2">{card.desc}</Typography>
                </CardContent>
            </Grid> 
          )
        })
        }
      </Grid>
    </div>
  )
}

export default Cards
