import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer'
import { DateContainer, TimeContainer } from './styles'

function MovieSession(props) {
    const {idSession, movieTitle, posterURL, date, weekday, showTimes} = props
    const navigate =  useNavigate()

  return (
    <div>
      <p data-test="movie-day">
        <span>{weekday}</span> <span>{date}</span>
      </p>
        {showTimes.map(showtime => {
          return (
            <button 
              data-test="showtime" 
              onClick = {() =>  navigate(`/assentos/${showtime.id}`)} 
              key = {showtime.id}>
                {showtime.name}
            </button>
        )})}
    </div>
  )
}

export default MovieSession