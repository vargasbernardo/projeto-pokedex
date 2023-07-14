import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import Router from './Router/Router'



function App() {
  const [pokemons, setPokemons] = useState([])


  useEffect(() => {
      fetchPokemons()

  }, [])

  const fetchPokemons = async () => {
    try {
     const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
     setPokemons(res.data.results)
      
    } catch (error) {
      alert(error.message)
    }

  }

  return (
    <>
      <Header />
      <Router pokemons={pokemons} />
       
    </>
  )
}

export default App
