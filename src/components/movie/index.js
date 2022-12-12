import React from 'react'
import { useNavigate } from 'react-router-dom'

function Movie(props) {
    const {id, movieTitle, posterURL} =  props
    const navigate = useNavigate()

    return (
        <div data-test="movie">
            {<img onClick={() => navigate(`/session/${id}`, {state: {movieTitle, posterURL }})} src = {posterURL} />}
        </div>
    )
}

export default Movie