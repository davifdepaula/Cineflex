import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Movie from '../../components/movie'
import { MoviesContainer, Container } from './styles'


function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const url = 'https://mock-api.driven.com.br/api/v8/cineflex/movies'
    axios.get(url)
      .then(response => { 
        setMovies(response.data)})
      .catch(error => console.log(error.response.data))

  }, [])

  return (
    <Container>
    <div className='movieSelection'>Selecione o filme</div>
    <MoviesContainer>
      <div className='moviesGrid'>
        {movies.map((movie) =>  { 
          return (
            <Movie 
              key = {movie.id}
              id = {movie.id}
              movieTitle = {movie.title}
              posterURL = {movie.posterURL}
            />
          )
        })}
      </div>
    </MoviesContainer>
  </Container>
  )
}

export default Home