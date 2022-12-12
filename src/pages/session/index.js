import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import MovieSession from '../../components/movieSession'
import Footer from '../../components/footer'

import { Container, SessionContainer } from './styles'

function Session() {
    const {id} = useParams()
    const [movieSession, setMovieSession] = useState()
    const location = useLocation()
    const {movieTitle, posterURL} = location.state

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`
        axios.get(url)
            .then(response => setMovieSession(response.data))
            .catch(error => console.log(error.response.data))
    }, [])

    if (movieSession === undefined){
        return <>Loading ...</>
    }
    
  return (
    <Container>
    <div className='timeSelector'>Selecione o horário</div>
    <SessionContainer>
        {movieSession.days.map((item) => {
            return (
                <MovieSession 
                movieTitle = {movieTitle}
                posterURL = {posterURL}
                key = {item.id}
                idSession = {item.id}
                date = {item.date}
                weekday = {item.weekday} 
                showTimes = {item.showtimes}
                />
            ) 
        })}

    </SessionContainer>
    <Footer 
        movieTitle = {movieTitle}
        posterURL = {posterURL}
        date = {''}
        time = {''}
    />
  </Container>
  )
}

export default Session