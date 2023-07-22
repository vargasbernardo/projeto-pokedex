import { DeleteButton, HeaderContainer, PokedexButton } from "./headerStyle";
import pokemonLogo from '../../assets/images/pokemon-logo.png';
import { useParams, Link } from "react-router-dom";



export default function Header({params}) {
    return (
        <HeaderContainer>
            {params ? <Link to="/">Todos os Pokemons</Link> : null}
            <img src={pokemonLogo} />
            {params ? <DeleteButton>Excluir da Pokedex</DeleteButton> : <PokedexButton><Link to="/pokedex">Pokedex</Link></PokedexButton>}
        
        </HeaderContainer>
    )
}