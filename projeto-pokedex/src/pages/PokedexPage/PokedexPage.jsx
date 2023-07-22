import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function PokedexPage() {
    const params = useParams()
    console.log(params);
    return (
        <>
            <Header />
            <h1>Pokedex Page</h1>
        
        </>
    )
}