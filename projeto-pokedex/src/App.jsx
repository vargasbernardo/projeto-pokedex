import { useEffect, useState } from 'react'
import axios from 'axios'

import Router from './Router/Router'
import BASE_URL from './constants/BASE_URL'
import { GlobalStyles } from './GolbalStyles'



function App() {
  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState(getLocalStorage() || [])


  useEffect(() => {
      fetchPokemons()
      

  }, [])
  
  const fetchPokemons = async () => {
    try {
      const fetchedPokemons = []

      for (let i = 1; i <= 210; i++) {
        
        const res = await axios.get(`${BASE_URL}/${i}`)
        fetchedPokemons.push(res.data)

      }
      setPokemons(fetchedPokemons)
      
    } catch (error) {
      console.log(error.message)
    }

  }

    function handleClick(id) {
      addToPokedex(id)
  }
    
  async function addToPokedex(id) {
      try {
          const res = await axios.get(`${BASE_URL}/${id}`)
          setPokedex([...pokedex, res.data]);
          localStorage.setItem('pokes', JSON.stringify([...pokedex, res.data]));
      } catch (error) {
          console.log(error);
      }
  }

  function getLocalStorage() {
    try {
      const storedData = localStorage.getItem('pokes');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        console.log(parsedData);
        return parsedData;
      } else {
        console.log("No data found in local storage.");
        return null;
      }
    } catch (error) {
      console.log("Error while retrieving data from local storage:", error.message);
      return null;
    }
  }
  

  return (
    <>
      <GlobalStyles />
      <Router pokemons={pokemons} handleClick={handleClick} pokedex={pokedex}/>
       
    </>
  )
}

export default App
