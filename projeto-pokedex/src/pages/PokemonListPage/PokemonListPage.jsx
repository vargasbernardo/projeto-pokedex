import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { PokemonList, PokemonListContainer, PokemonListTitle } from "./pokemonListPageStyle"
import Header from "../../components/Header/Header"

export default function PokemonListPage({pokemons}) {
    
    return (
        <PokemonList>
            <Header />
            <PokemonListTitle>
                <h1>Todos os Pokemons</h1>

            </PokemonListTitle>
            <PokemonListContainer>
                <PokemonCard pokemons={pokemons}/>        
            </PokemonListContainer>
        
        </PokemonList>
    )
}