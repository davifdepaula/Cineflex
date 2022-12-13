import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DateContainer, TimeContainer } from './styles'

function MovieSession(props) {
    const {idSession, movieTitle, posterURL, date, weekday, showtimes} = props
    const navigate =  useNavigate()

  return (
    <div>
      <DateContainer data-test="movie-day">
        <span>{weekday}</span> <span>{date}</span>
      </DateContainer>
      <TimeContainer>
        {showtimes.map(showtime => {
          return (
            <button 
              data-test="showtime" 
              onClick = {() =>  navigate(`/assentos/${showtime.id}`)} 
              key = {showtime.id}>
                {showtime.name}
            </button>
        )})}
      </TimeContainer>
    </div>
  )
}

export default MovieSession