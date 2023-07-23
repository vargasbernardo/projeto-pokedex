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
    height: 100vh;
    
`
export const PokemonListTitle = styled.div`
    padding: 25px;
    h1 {
        margin-left: 70px;
    }
`
export const Modal = styled.div`
    /* border: 1px solid red; */
    width: 450px;
    height: 220px;
    position: fixed;
    top: 40%;
    right: 40%;
    background-color: var(--light-background-color);
    z-index: 9;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--dark-text-color);
    h1 {
        font-size: 48px;
    }
    h3 {
        font-size: 16px;
        margin-top: 10px;
    }
    svg {
        position: inherit;
        color: red;
        cursor: pointer;
        top: 390px;
        right: 770px;
    }


`