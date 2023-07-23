import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import PokemonListPage from '../pages/PokemonListPage/PokemonListPage'
import PokemonDetailPage from '../pages/PokemonDetailPage/PokemonDetailPage'


export default function Router({pokemons, handleClick, pokedex }) {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonListPage pokemons={pokemons} handleClick={handleClick}/>}/>
                <Route path="/pokedex" element={<PokedexPage pokedex={pokedex}/>} />
                <Route path="/:id" element={<PokemonDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}