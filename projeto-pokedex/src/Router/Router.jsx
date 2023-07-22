import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PokedexPage from '../pages/PokedexPage/PokedexPAge'
import PokemonListPage from '../pages/PokemonListPage/PokemonListPage'
import PokemonDetailPage from '../pages/PokemonDetailPage/PokemonDetailPage'


export default function Router({pokemons }) {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonListPage pokemons={pokemons} />}/>
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/:id" element={<PokemonDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}