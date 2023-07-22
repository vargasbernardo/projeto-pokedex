import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { PokemonList, PokemonListContainer, PokemonListTitle } from "../PokemonListPage/pokemonListPageStyle";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

export default function PokedexPage() {
    const params = useParams()
    console.log(params);
    return (
        <PokemonList>
        <Header />
        <PokemonListTitle>
            <h1>Meus Pokemons</h1>

        </PokemonListTitle>
        <PokemonListContainer>
                 
        </PokemonListContainer>
    
    </PokemonList>
    )
}