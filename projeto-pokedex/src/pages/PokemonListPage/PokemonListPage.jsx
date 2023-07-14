import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { PokemonListContainer } from "./pokemonListPageStyle"

export default function PokemonListPage({pokemons}) {
    console.log(pokemons)
    
    return (
        <>
            <h1>Pokemon List Page</h1>
            <PokemonListContainer>
                <PokemonCard pokemons={pokemons}/>        


            </PokemonListContainer>
        </>
    )
}