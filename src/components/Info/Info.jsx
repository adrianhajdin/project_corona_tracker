import React from 'react';

import confirmed from '../../images/confirmed.png'
import recovered from '../../images/recovered.png'
import deaths from '../../images/deaths.png'

import './Info.css';

const Info = ({ data }) => {
  return (
    <div className="container">
      <div className='card confirmed'>
        <img src={confirmed} alt="confirmed" />
        <h1>Infected: {data.confirmed.toLocaleString()}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam adipisci ad, excepturi beatae dolore deserunt, non unde soluta aspernatur dignissimos. Unde incidunt repellat
          laboriosam ipsa modi odit voluptatibus provident!
        </p>
      </div>
      <div className='card recovered'>
        <img src={recovered} alt="recovered" />
        <h1>Recovered: {data.recovered.toLocaleString()}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam adipisci ad, excepturi beatae dolore deserunt, non unde soluta aspernatur dignissimos. Unde incidunt repellat
          laboriosam ipsa modi odit voluptatibus provident!
        </p>
      </div>
      <div className='card deaths'>
        <img src={deaths} alt="deaths" />
        <h1>Deaths: {data.confirmed.toLocaleString()}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi numquam adipisci ad, excepturi beatae dolore deserunt, non unde soluta aspernatur dignissimos. Unde incidunt repellat
          laboriosam ipsa modi odit voluptatibus provident!
        </p>
      </div>
    </div>
  )
}

export default Info;
