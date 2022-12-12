import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import Choices from '../../components/choices'
import Footer from '../../components/footer'
import Sucess from '../successo'

import { SeatsContainer, SeatsChoices, Card } from './styles'

function Assentos() {
    const [entries, setEntries] = useState()
    const [select, setSelect] = useState([])
    const [selectSeats, setSelectSeats] = useState([])
    const [name, setName] = useState()
    const [CPF, setCPF] = useState()
    const {id} = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    // const {movieTitle, posterURL} = location.state

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`
        axios.get(URL)
            .then(response => setEntries(response.data))
            .catch(error => console.log(error.response.data))
    })

  if (entries === undefined){
      return <>Loading ...</>
  }


  function selectSeat(entry){
    if (entry.isAvailable) {
      if(select.includes(entry.id)){
        const newSelect = select.filter( seat => seat !== entry.id)
        setSelect([...newSelect])

        const temp = selectSeats.filter( seat => seat !== entry.name)
        selectSeats([...temp])
        return
      }

      setSelect([...select, entry.id])
      setSelectSeats([...selectSeats, entry.name])
      return
    }
    else {
      alert("Assento indisponível")
      return
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    const clientInfo = {
      ids: [...select],
      name: name,
      CPF: CPF
  }

  if(!CPF){ 
    alert("O CPF deve ser inserido!")
    return
  }

  if(!name){ 
    alert("O nome deve ser inserido!")
    return
  }

  if(select.length === 0){ 
    alert("Você precisa selecionar uma cadeira!")
    return
  }


  const date = entries.day.date
  const time = entries.name
  const movieTitle = entries.movie.title
  const url = `https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`
  axios.post(url, clientInfo)
    .then(response => {
      navigate("/sucesso", {state: {movieTitle, date, time, selectSeats, name, CPF}})
    })
    .catch(error => console.log(error.response.data))
}

return (
  <SeatsContainer>
    <div className='seatsSelector'> Selecione o(s) assento(s) </div>
    <SeatsChoices>
      {entries.seats.map((entry) => {
        return (
          <Card key = {entry.id} isAvailable = {entry.isAvailable} isSelect = {select.includes(entry.id)}>
            <button data-test="seat" onClick = {() => selectSeat(entry)}>{entry.name}</button>
          </Card>
        )
      })}
    </SeatsChoices>

    <div className='choices'> 
      <Choices 
        text = 'Selecionado'
        background = '#1AAE9E'
        color = '#0E7D71'
      />

      <Choices 
        text = 'Disponivel'
        background = '#C3CFD9'
        color = '#7B8B99'
      />

      <Choices 
        text = 'Indisponível'
        background = '#FBE192'
        color = '#F7C52B'
      />
    </div>




    <form onSubmit={handleSubmit}>
      <label>
        Nome do comprador: 
        <input 
          data-test="client-name"
          name = 'name'
          type='text' 
          placeholder='Digite seu nome' 
          valeu={name} 
          onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        CPF do comprador:
        <input 
          data-test="client-cpf"
          type='text' 
          placeholder='Digite seu CPF' 
          onChange={(e) => setCPF(e.target.value)}/>
      </label>

      <button data-test="book-seat-btn" type='submit'>Reservar assento(s)</button>
    </form>

    <Footer
      movieTitle = {entries.movie.title}
      posterURL = {entries.movie.posterURL}
      date = {entries.day.date}
      time = {entries.name}
    />
  
  </SeatsContainer>
)
  
  
}

export default Assentos