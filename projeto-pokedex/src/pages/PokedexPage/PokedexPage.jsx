import Header from "../../components/Header/Header";
import { Modal, PokemonList, PokemonListContainer, PokemonListTitle } from "../PokemonListPage/pokemonListPageStyle";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import GlobalContext from "../../context/GlobalContext";
import { useContext } from "react";



export default function PokedexPage() { 
    const {pokedex} = useContext(GlobalContext) 
    

    return (
        <PokemonList>
        <Header currentPage='pokedex' />
        <PokemonListTitle>
            <h1>Meus Pokemons</h1>
        </PokemonListTitle>
        <PokemonListContainer>
            {pokedex.map((pokemon, index) => {
                return <PokemonCard key={index} pokemon={pokemon} currentPage='pokedex'/>
            })}
                 
        </PokemonListContainer>
    
    </PokemonList>
    )
}