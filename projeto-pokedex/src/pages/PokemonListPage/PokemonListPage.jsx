import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { PokemonList, PokemonListContainer, PokemonListTitle, Modal } from "./pokemonListPageStyle"
import Header from "../../components/Header/Header"
import { useState } from "react"
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function PokemonListPage({pokemons, handleClick, pokedex}) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    return (
        <PokemonList>
            <Header currentPage='pokemonList'/>
            <PokemonListTitle>
                <h1>Todos os Pokemons</h1>

            </PokemonListTitle>
            <PokemonListContainer>
                {pokemons.map((pokemon, index) => {
                    return <PokemonCard key={index} index={index} pokemon={pokemon} handleClick={handleClick} currentPage='pokemonList' setIsModalOpen={setIsModalOpen} />
                })}     
            </PokemonListContainer>
                {isModalOpen ? <Modal>
                    <AiOutlineCloseCircle onClick={() => setIsModalOpen(false)}/>
                    <h1>Gotcha!</h1>
                    <h3>O pokemon foi adicionado a sua Pokedex!</h3>
                </Modal> : null}
        
        </PokemonList>
    )
}