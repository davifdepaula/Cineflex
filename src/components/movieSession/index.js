import React from 'react'
import { useNavigate } from 'react-router-dom'
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
        {showTimes.map(showtime => 
            <button data-test="showtime" onClick = {() =>  navigate(`/assentos/${showtime.id}`, {state: {movieTitle, posterURL}})} key = {showtime.id} >{showtime.name}</button>
        )}
      </TimeContainer>
    </div>
  )
}

export default MovieSession