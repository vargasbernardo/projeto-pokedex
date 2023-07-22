import styled from 'styled-components'


export const PokemonListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    grid-row-gap: 60px;
    background-color: var(--dark-background-color);
    a {
        color: var(--light-text-color);
    }

`

export const PokemonList = styled.div`
    background-color: var(--dark-background-color);
    color: var(--light-text-color);
    
`
export const PokemonListTitle = styled.div`
    padding: 25px;
    h1 {
        margin-left: 70px;
    }
`