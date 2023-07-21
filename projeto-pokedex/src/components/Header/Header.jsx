import { HeaderContainer } from "./headerStyle";
import pokemonLogo from '../../assets/images/pokemon-logo.png';



export default function Header() {
    return (
        <HeaderContainer>
            <img src={pokemonLogo} />
            <button>Pokedex</button>
        
        </HeaderContainer>
    )
}