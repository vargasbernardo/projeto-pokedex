import { PokemonCards } from './pokemonCardStyle'
import { useEffect, useState } from 'react'

export default function PokemonCard({pokemons}) {
    const [pokemonDetails, setPokemonsDetails] = useState([])

    
    const pokemonsCards = pokemons.map((pokemon, index) => {

        return (
            <PokemonCards key={index}>
                <h1>{pokemon.name}</h1>
                <p>{pokemon.url}</p>
            </PokemonCards>
        )
    })

    console.log(pokemonsCards)

    return (
        <>
            {pokemonsCards}
        </>
    )
}