import { useEffect, useState } from "react"
import GlobalContext from "./GlobalContext"
import BASE_URL from "../constants/BASE_URL"
import axios from "axios"




export default function GlobalState(props) {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState(getLocalStorage() || [])

    useEffect(() => {
        fetchPokemons()
        
  
    }, [])
    
    const fetchPokemons = async () => {
      try {
        const fetchedPokemons = []
  
        for (let i = 1; i <= 30; i++) {
          
          const res = await axios.get(`${BASE_URL}/${i}`)
          fetchedPokemons.push(res.data)
  
        }
        setPokemons(fetchedPokemons)
        
      } catch (error) {
        console.log(error.message)
      }
  
    }

    
    async function addToPokedex(id, index) {
        try {
            const res = await axios.get(`${BASE_URL}/${id}`)
            setPokedex([...pokedex, res.data]);
            setPokemons(prevPokemons => {
              const newPokemons = [...prevPokemons];
              newPokemons.splice(index, 1); 
              return newPokemons;
            });
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

      async function removeFromPokedex(id, index) {
        try {
            // Remove the Pokémon from the pokedex state
            setPokedex(prevPokedex => prevPokedex.filter(pokemon => pokemon.id !== id));
            
            // Add the removed Pokémon back to the list of available pokemons
            setPokemons(prevPokemons => {
              const newPokemons = [...prevPokemons];
              newPokemons.splice(index, 0, pokedex.find(pokemon => pokemon.id === id)); // Insert the removed pokemon at the original index
              return newPokemons;
          });
              
              // Update the localStorage to reflect the changes in the pokedex
            const storedPokes = JSON.parse(localStorage.getItem('pokes'));
            if (storedPokes) {
                const updatedStoredPokes = storedPokes.filter(pokemon => pokemon.id !== id);
                localStorage.setItem('pokes', JSON.stringify(updatedStoredPokes));
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <GlobalContext.Provider value={{pokemons, addToPokedex, pokedex, removeFromPokedex}}>
            {props.children}
        </GlobalContext.Provider>
    )

}