import React from 'react'
import Button from './Button'
import './Card.css'

function Card(props) {
    function jokeHandler (){
        props.generateJoke()
    }
 
  return (
    <div className='container'>
      <p className='joke'>
        {props.children}
      </p>
      <Button jokeHandler={jokeHandler} className='button'>Next Joke 😂</Button>
    </div>
  )
}

export default Card
