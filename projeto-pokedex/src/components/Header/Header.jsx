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

const Header = ({ currentPage, pokemonId }) => {
  const [showPokedexButton, setShowPokedexButton] = useState(true);
  const { removeFromPokedex, pokedex, addToPokedex, pokemons } =
    useContext(GlobalContext);
  console.log(pokedex);
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
              onClick={() => removeFromPokedex(pokemonId, pokeIndex)}
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
    </>
  );
};

export default Header;
