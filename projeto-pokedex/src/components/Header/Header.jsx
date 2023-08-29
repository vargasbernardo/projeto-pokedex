import {
  DeleteButton,
  HeaderContainer,
  PokedexButton,
  AddButton,
} from "./headerStyle";
import pokemonLogo from "../../assets/images/pokemon-logo.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { Modal } from "../../pages/PokemonListPage/pokemonListPageStyle";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = ({ currentPage, pokemonId }) => {
  const [showPokedexButton, setShowPokedexButton] = useState(true);
  const {  pokedex, addToPokedex, removeFromPokedex, pokemons, isModalOpen, setIsModalOpen, isExcludedModalOpen, setIsExcludedModalOpen } =
    useContext(GlobalContext);
    const isPokeOnPokedex = pokedex.some(
    (pokemon) => pokemon.id === Number(pokemonId)
  );
  const pokeIndex = pokemons.findIndex(
  (pokemon) => pokemon.id === Number(pokemonId)
  );

  const handlePokedexButtonClick = () => {
    setShowPokedexButton(false);
  };

  return (
    <>
      {currentPage === "pokemonList" && showPokedexButton && (
        <HeaderContainer>
          <img src={pokemonLogo} alt="Pokemon Logo" />
          <PokedexButton onClick={handlePokedexButtonClick}>
            <Link to="/pokedex">Pokedex</Link>
          </PokedexButton>
        </HeaderContainer>
      )}

      {currentPage === "pokedex" && (
        <HeaderContainer>
          <Link to="/">Todos os Pokemons</Link>
          <img src={pokemonLogo} alt="Pokemon Logo" />
        </HeaderContainer>
      )}

      {currentPage === "details" && (
        <HeaderContainer>
          <Link to="/">Todos os Pokemons</Link>
          <img src={pokemonLogo} alt="Pokemon Logo" />
          {isPokeOnPokedex ? (
            <DeleteButton
              onClick={() => removeFromPokedex(Number(pokemonId))}
            >
              Excluir da Pokedex
            </DeleteButton>
          ) : (
            <AddButton onClick={() => addToPokedex(pokemonId, pokeIndex)}>
              Capturar
            </AddButton>
          )}
        </HeaderContainer>
      )}
      {isModalOpen ? <Modal>
                    <AiOutlineCloseCircle onClick={() => setIsModalOpen(false)}/>
                    <h1>Gotcha!</h1>
                    <h3>O pokemon foi adicionado a sua Pokedex!</h3>
                </Modal> : null}
                {isExcludedModalOpen ? <Modal>
                    <AiOutlineCloseCircle onClick={() => setIsExcludedModalOpen(false)}/>
                    <h1>Oh, no!</h1>
                    <h3>O pokemon foi removido da sua Pokedex!</h3>
                </Modal> : null}

    </>
  );
};

export default Header;
