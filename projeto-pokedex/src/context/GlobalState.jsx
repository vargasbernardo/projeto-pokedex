import { useEffect, useState } from "react"
import GlobalContext from "./GlobalContext"
import BASE_URL from "../constants/BASE_URL"
import axios from "axios"




export default function GlobalState(props) {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState(getLocalStorage() || [])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isExcludedModalOpen, setIsExcludedModalOpen] = useState(false)

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
          setIsModalOpen(true)
      } catch (error) {
          console.log(error);
      }
  }
    function getLocalStorage() {
        try {
          const storedData = localStorage.getItem('pokes');
          if (storedData) {
            const parsedData = JSON.parse(storedData);
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

      async function removeFromPokedex(id) {
        try {
            setPokedex(prevPokedex => prevPokedex.filter(pokemon => pokemon.id !== id));
            setPokemons(prevPokemons => {
              const newPokemons = [...prevPokemons];
              newPokemons.unshift(pokedex.find(pokemon => pokemon.id === id)); 
              return newPokemons;
          });
                    const storedPokes = JSON.parse(localStorage.getItem('pokes'));
            if (storedPokes) {
                const updatedStoredPokes = storedPokes.filter(pokemon => pokemon.id !== id);
                localStorage.setItem('pokes', JSON.stringify(updatedStoredPokes));
            }
            setIsExcludedModalOpen(true)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <GlobalContext.Provider value={{pokemons, addToPokedex, pokedex, setIsModalOpen, isModalOpen, removeFromPokedex, isExcludedModalOpen, setIsExcludedModalOpen}}>
            {props.children}
        </GlobalContext.Provider>
    )

}