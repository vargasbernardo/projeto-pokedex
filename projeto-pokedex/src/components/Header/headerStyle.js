import styled from 'styled-components'


export const HeaderContainer = styled.header`
    height: 160px;
    background-color: var(--light-background-color);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    z-index: 1;
    img{
        width: 307px;
        height: 113px;
        grid-column: 2;
    }
    a{ 
        grid-column: 1;
        align-self: center;
        justify-self: center;
        font-weight: bold;
    }

`
export const PokedexButton = styled.button`
        grid-column: 3;
        width: 200px;
        height: 50px;
        background-color: var(--button-background-color);
        border: none;
        border-radius: 8px;
        color: var(--light-text-color);
        cursor: pointer;

`
export const DeleteButton = styled.button`
        grid-column: 3;
        width: 200px;
        height: 50px;
        background-color: var(--secondary-button-background-color);
        border: none;
        border-radius: 8px;
        color: var(--light-text-color);
        cursor: pointer;

`