import { DeleteButton, HeaderContainer, PokedexButton } from "./headerStyle";
import pokemonLogo from '../../assets/images/pokemon-logo.png';
import { Link } from "react-router-dom";
import { useState } from "react";



const Header = ({ currentPage }) => {
    const [showPokedexButton, setShowPokedexButton] = useState(true);
  
    const handlePokedexButtonClick = () => {
      setShowPokedexButton(false);
    };
  
    return (
      <>
        {currentPage === 'pokemonList' && showPokedexButton && (
            <HeaderContainer>
                <img src={pokemonLogo} alt="Pokemon Logo" />
                <PokedexButton onClick={handlePokedexButtonClick}>
                    <Link to="/pokedex">Pokedex</Link>
                </PokedexButton>
            </HeaderContainer>          
        )}
  
        {currentPage === 'pokedex' && (
            <HeaderContainer>
                <Link to="/">Todos os Pokemons</Link>
                <img src={pokemonLogo} alt="Pokemon Logo" />
            </HeaderContainer>
        )}
  
        {currentPage === 'details' && (
          <HeaderContainer>
            <Link to="/">Todos os Pokemons</Link>
            <img src={pokemonLogo} alt="Pokemon Logo" />
            <DeleteButton>Excluir da Pokedex</DeleteButton>
          </HeaderContainer>
        )}
        
      </>
    );
  };
  
  export default Header;