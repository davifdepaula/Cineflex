import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, TicketContainer } from './styles'


function Sucesso({route}) {
    const location = useLocation()
    const navigate = useNavigate()
    const {movieTitle, date, time, selectSeats, name, CPF} = location.state
    

  return (
    <Container>
    <div className='sucessOrder'>Pedido feito com sucesso!</div>

    <TicketContainer data-test="movie-info">
      <div className='title'>Filme e sessão</div>
      <div className = 'content'>{movieTitle}</div>
      <div className = 'content'>{date} {time}</div>

    </TicketContainer>

    <TicketContainer data-test="seats-info">
      <div className='title'>Ingressos</div>
        {selectSeats.map((item) => {
            return (
                <div className = 'content'key = {item}>Assento {item}</div>
            ) 
        })}
    </TicketContainer>

    <TicketContainer data-test="client-info">
      <div className='title'>Comprador</div>
      <div className = 'content'>Nome: {name}</div>
      <div className = 'content'>CPF: {CPF}</div>

    </TicketContainer>
    <button data-test="go-home-btn" onClick={() => navigate('/')}>Voltar pra Home</button>
  </Container>
  )
}

export default Sucesso