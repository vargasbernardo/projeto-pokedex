import styled from 'styled-components'


export const PokemonCards = styled.div`
    /* border: 1px solid red; */
    border-radius: 12px;
    width: 440px;
    height: 210px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: green;
    position: relative;
    div {
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        /* align-items: center; */

    }
    a {
        text-decoration: underline;
    }
`
export const CaptureButton = styled.button`
        padding: 4px 10px;
        width: 146px;
        height: 38px;
        background-color: var(--light-background-color);
        border-radius: 8px;
        border: none;
        color: var(--dark-text-color);
        font-weight: bold;
        margin-top: 10px;
        align-self: center;
        cursor: pointer;
        z-index: 2;

`

export const InfoContainer = styled.div`
    display: flex;
    /* border: 1px solid red; */
    height: 100%;
    justify-content: space-around;
    color: var(--light-text-color);


`
export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  z-index: 1;
`
export const Pokeball = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    
`

export const ImageContainer = styled.div`
    margin-bottom: 70px;    
`
export const TypesContainer = styled.span`
    width: 200px;
    height: 31px;
    display: flex;
    /* border: 1px solid blue; */
    justify-content: space-between;
    span {
        width: 90px;
        height: 100%;
        border: 1px dashed var(--light-background-color);
        border-radius: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    img {
        width: 15px;
        height: 15px;
    }
`