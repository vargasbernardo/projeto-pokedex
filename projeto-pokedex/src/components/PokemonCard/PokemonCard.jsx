import { CaptureButton, ImageContainer, InfoContainer, Pokeball, Pokemon, PokemonCards, TypesContainer} from './pokemonCardStyle'
import getLogo from '../../utils/typeLogo'
import getTypeBackground from '../../utils/typeBackgroundColor';
import getCardBackground from '../../utils/cardBackground';
import pokeball from '../../assets/svgs/pokeball.png';
import {Link} from 'react-router-dom';
import addLeadingZero from '../../utils/addLeadingZero'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'


export default function PokemonCard({pokemons}) {
    
   function handleClick() {
         console.log('clicked')
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
                        <Link to={`/${pokemon.id}`}>Detalhes</Link>
                    </InfoContainer>
                    <ImageContainer>
                        <Pokemon src={pokemon.sprites.other['official-artwork'].front_default} />
                        <CaptureButton onClick={handleClick}>Capturar!</CaptureButton>
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