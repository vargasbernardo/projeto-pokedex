import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { PokemonList, PokemonListContainer, PokemonListTitle, Modal } from "./pokemonListPageStyle"
import Header from "../../components/Header/Header"
import { useContext } from "react"
import {AiOutlineCloseCircle} from 'react-icons/ai'
import GlobalContext from "../../context/GlobalContext"

export default function PokemonListPage() {
    const context = useContext(GlobalContext)
    
    return (
        <PokemonList>
            <Header currentPage='pokemonList' />
            <PokemonListTitle>
                <h1>Todos os Pokemons</h1>

            </PokemonListTitle>
            <PokemonListContainer>
                {context.pokemons.map((pokemon, index) => {
                    return <PokemonCard key={index} index={index} pokemon={pokemon} currentPage='pokemonList' />
                })}     
            </PokemonListContainer>
                {context.isModalOpen ? <Modal>
                    <AiOutlineCloseCircle onClick={() => context.setIsModalOpen(false)}/>
                    <h1>Gotcha!</h1>
                    <h3>O pokemon foi adicionado a sua Pokedex!</h3>
                </Modal> : null}
                {context.isExcludedModalOpen ? <Modal>
                    <AiOutlineCloseCircle onClick={() => context.setIsExcludedModalOpen(false)}/>
                    <h1>Oh, no!</h1>
                    <h3>O pokemon foi removido da sua Pokedex!</h3>
                </Modal> : null}
        
        </PokemonList>
    )
}