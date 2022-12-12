import React from 'react'
import { FooterContainer, TextContainer, ImgContainer } from './styles'

function Footer(props) {
    const {movieTitle, posterURL, date, time} = props
  return (
    <FooterContainer data-test="footer">

        <ImgContainer>
            {<img src={posterURL}/>}
        </ImgContainer>

        <TextContainer>
            <div>{movieTitle}</div>
            {!date? (null) : (
                <div> {date} - {time}</div>
            )}
        </TextContainer>
    </FooterContainer>
  )
}

export default Footer