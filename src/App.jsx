

import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [fact, setFact] = useState("")
  const [img, setImg] = useState("")


  useEffect(() => {
  axios.get('https://catfact.ninja/fact').then((response)=>setFact(response.data.fact))
    }
  , [])
  
  let slicedFact= fact.split(' ').slice(0,3).join('+')
  const API_KEY="0Tb9bU13tK0i1mu3Cto4g70WNxw28VH3"

  useEffect(() => {
    axios.get(` https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${slicedFact}`).then((response)=>setImg(response.data.data[0].images.original.url))
      }
    , [fact])
 

  return (
    <>
    <h1>Prueba Tecnica 01 Midudev Carlos Calleja </h1>
    <div className='container'>
      <h2>{fact}</h2>
      {/* <h2>{img}</h2> */}
      
      <img src={img}/> 
    </div>
    </>
  )
}

export default App
