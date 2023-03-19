import React from 'react'
import './Button.css'
function Button(props) {
  const jokeHandler =()=>{
    props.jokeHandler()
  }
  return (
    <div className='button'>
        <button onClick={jokeHandler}  className='btn'>{props.children}</button>
    </div>
  )
}

export default Button