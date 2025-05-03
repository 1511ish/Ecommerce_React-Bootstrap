import React from 'react'
import List from '../List/List';
import "./Home.css";

export default function Home() {
  const tours = [
    {
      date: 'JUL 16',
      place: 'DETROIT, MI',
      specPlace: 'DTE ENERGY MUSIC THEATRE'
    },
    {
      date: 'JUL 19',
      place: 'TORONTO,ON',
      specPlace: 'BUDWEISER STAGE'
    },
    {
      date: 'JUL 22',
      place: 'BRISTOW, VA',
      specPlace: 'JIGGY LUBE LIVE'
    },
    {
      date: 'JUL 29',
      place: 'PHOENIX, AZ',
      specPlace: 'AK-CHIN PAVILION'
    },
    {
      date: 'AUG 2',
      place: 'LAS VEGAS, NV',
      specPlace: 'T-MOBILE ARENA'
    }
  ]
  return (
    <>
      <h2>Tours</h2>
      <ul>
        {
          tours.map((tour) => {
            return <List name={tour.date} place={tour.place} specPlace={tour.specPlace} />
          })
        }
      </ul>
    </>
  )
}
