import React from 'react'
import { Options, Circle } from './styles'

function Choices(props) {
    const {text, background, color} = props
  return (
    <Options>
        <div className='option'>

          <Circle background =  {background} color = {color}>

          </Circle>

          <div className='text'>
            {text}
          </div>
        </div>
    </Options>
  )
}

export default Choices