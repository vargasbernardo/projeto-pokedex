import { ImageContainer, InfoContainer, Pokeball, Pokemon, PokemonCards, TypesContainer} from './pokemonCardStyle'
import getLogo from '../../utils/typeLogo'
import getTypeBackground from '../../utils/typeBackgroundColor';
import getCardBackground from '../../utils/cardBackground';
import pokeball from '../../assets/svgs/pokeball.png'


export default function PokemonCard({pokemons}) {
    function capitalizeFirstLetter(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
      }
    function addLeadingZero(number) {
        return number < 10 ? "0" + number : number.toString();
      }
      
      

    const cardData = pokemons.map((pokemon, index) => {       
        return (
            <PokemonCards key={index} style={{backgroundColor: getCardBackground(pokemon.types[0].type.name)}}>
                    <InfoContainer>
                        <div>
                            <p>#{addLeadingZero(pokemon.id)}</p>
                            <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
                            <TypesContainer>
                                {pokemon.types.map(type => {
                                    return (
                                            <span style={{backgroundColor: getTypeBackground(type.type.name)}} key={type.type.name}>
                                                <p>{capitalizeFirstLetter(type.type.name)}</p>
                                                <img src={getLogo(type.type.name)} />
                                            </span>
                                    );
                                })}
                            </TypesContainer>
                        </div>
                        <a>Detalhes</a>
                    </InfoContainer>
                    <ImageContainer>
                        <Pokemon src={pokemon.sprites.other['official-artwork'].front_default} />
                        <button>Capturar!</button>
                    </ImageContainer>
                    <Pokeball src={pokeball}/>
            </PokemonCards>
        )
    })
    


    return ( 
        <>
            {cardData}
        </>
        
    )
}