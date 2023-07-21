import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { PokemonList, PokemonListContainer, PokemonListTitle } from "./pokemonListPageStyle"

export default function PokemonListPage({pokemons}) {
    
    return (
        <PokemonList>
            <PokemonListTitle>
                <h1>Todos os Pokemons</h1>

            </PokemonListTitle>
            <PokemonListContainer>
                <PokemonCard pokemons={pokemons}/>        
            </PokemonListContainer>
        
        </PokemonList>
    )
}