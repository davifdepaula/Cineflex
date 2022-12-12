import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../footer'
import { DateContainer, TimeContainer } from './styles'

function MovieSession(props) {
    const {idSession, movieTitle, posterURL, date, weekday, showTimes} = props
    const navigate =  useNavigate()

  return (
    <div>
      <DateContainer data-test="movie-day">
        <span>{weekday}</span> <span>{date}</span>
      </DateContainer>
      <TimeContainer>
        {showTimes.map(showtime => {
          return (
            <Link to = {`/assentos/${showtime.id}`} state = {{movieTitle, posterURL}} key = {showtime.id} data-test="showtime">
              <button>{showtime.name}</button>
            </Link>
          ) 
        })}
      </TimeContainer>
    </div>
  )
}

export default MovieSession