import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import PokemonListPage from '../pages/PokemonListPage/PokemonListPage'
import PokemonDetailPage from '../pages/PokemonDetailPage/PokemonDetailPage'


export default function Router() {
    
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonListPage/>}/>
                <Route path="/pokedex" element={<PokedexPage/>} />
                <Route path="/:id" element={<PokemonDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}