import styled from 'styled-components'


export const HeaderContainer = styled.header`
    height: 160px;
    background-color: var(--light-background-color);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    img{
        width: 307px;
        height: 113px;
        grid-column: 2;
    }
    button {
        grid-column: 3;
        width: 200px;
        height: 50px;
        background-color: var(--button-background-color);
        border: none;
        border-radius: 8px;
        color: var(--light-text-color);
        cursor: pointer;

    }


`