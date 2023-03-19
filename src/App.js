import React,{useState,useEffect} from 'react'
import Card from './Card'
import axios from 'axios'
import './App.css'
const API = "https://api.chucknorris.io/jokes/random"
function App() {
  const[data,setData]=useState({})

 const generateJoke = ()=>{
  axios.get(API).then(data=>{
    setData(data.data)
    console.log(data.data)
  })
 }
useEffect(()=>{
  generateJoke();
},[])
  return (
    <div>
    <h1 className='heading'>Welcome To Chuck Norris Jokes</h1>
    {(typeof data.value === "undefined")?( <p>Loading..</p> ):( <Card generateJoke={generateJoke}>{data.value}</Card> )}
      
    </div>
  )
}

export default App
