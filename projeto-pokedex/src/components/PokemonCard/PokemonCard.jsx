import {
  CaptureButton,
  ExcludeButton,
  ImageContainer,
  InfoContainer,
  Pokeball,
  Pokemon,
  PokemonCards,
  TypesContainer,
} from "./pokemonCardStyle";
import getLogo from "../../utils/typeLogo";
import getTypeBackground from "../../utils/typeBackgroundColor";
import getCardBackground from "../../utils/cardBackground";
import pokeball from "../../assets/svgs/pokeball.png";
import { Link } from "react-router-dom";
import addLeadingZero from "../../utils/addLeadingZero";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { Modal } from "../../pages/PokemonListPage/pokemonListPageStyle";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function PokemonCard({
  pokemon,
  handleClick,
  currentPage,
  setIsModalOpen,
  index
}) {
  return (
    <PokemonCards
      style={{ backgroundColor: getCardBackground(pokemon.types[0].type.name) }}
    >
      <InfoContainer>
        <div>
          <p>#{addLeadingZero(pokemon.id)}</p>
          <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
          <TypesContainer>
            {pokemon.types.map((type) => {
              return (
                <span
                  style={{ backgroundColor: getTypeBackground(type.type.name) }}
                  key={type.type.name}
                >
                  <p>{capitalizeFirstLetter(type.type.name)}</p>
                  <img src={getLogo(type.type.name)} />
                </span>
              );
            })}
          </TypesContainer>
        </div>
        <Link to={`/${pokemon.id}`}>Detalhes</Link>
      </InfoContainer>
      <ImageContainer>
        <Pokemon
          src={pokemon.sprites.other["official-artwork"].front_default}
        />
        {currentPage === "pokemonList" ? (
          <CaptureButton
            onClick={() => {
              handleClick(pokemon.id, index);
              setIsModalOpen(true); //
            }}
          >
            Capturar!
          </CaptureButton>
        ) : currentPage === "pokedex" ? (
          <ExcludeButton onClick={() => setIsModalOpen(true)}>Excluir</ExcludeButton>
        ) : null}
      </ImageContainer>
      <Pokeball src={pokeball} />
    </PokemonCards>
  );
}
